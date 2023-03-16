import { useCallback, useEffect, useState } from 'react';
import CustomTable from '@/components/CustomTable';
import FileAddOutlined from '@ant-design/icons/FileAddOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import GroupOutlined from '@ant-design/icons/GroupOutlined';
import SearchFilter from './SearchFilter';
import { Divider, message, Modal } from 'antd';
import { ButtonItem } from '@/data-type/common';
import { DEFAULT_SEARCH_PROPS, DEFAULT_PAGE_DATA } from '@/constants';
import InputDialog from './InputDialog';
import React, {Component} from 'react';
import ReactECharts from 'echarts-for-react';
import { Column } from '@ant-design/charts';
import { EyeTwoTone } from '@ant-design/icons';
import { color } from 'echarts';
import { Typography } from 'antd';



export default function ContactsPage(){
  const { Title } = Typography;
  const[pageData0,setPageData0]=useState<defs.Tongji<defs.ContactsProvinceVO>>();
    const getMaplist=async()=>
    {

       //const pageData=await API.contacts.tongji.request({});
       setPageData0(pageData);
    };
    const [searchProps, changeSearchProps] = useState<defs.ContactsQueryDTO>({
        ...DEFAULT_SEARCH_PROPS,
      });
      const [pageData, setPageData] = useState<defs.Page<defs.ContactsVO>>(
        DEFAULT_PAGE_DATA,
      );
      const [selectedRowKeys, selectRow] = useState<number[] | string[]>([]);
      const [visible, setVisible] = useState(false);
      const [loading, setLoading] = useState(false);
      const [contacts, setContacts] = useState<defs.ContactsDTO | undefined>(
        undefined,
      );
      const fetchList = useCallback((props) => {
        setLoading(true);
        API.contacts.list.request({}, props).then((data) => {
          setLoading(false);
          data && setPageData(data);
        });
      }, []);
      useEffect(() => {
        fetchList(searchProps);
        if (!pageData.total) {
          
          //getMaplist();
        }
      }, []);
      function transfer(list0:defs.Tongji<defs.ContactsProvinceVO>|undefined){let list1: any;
        if(list0)
      {list1=pageData0?.list!?.map(item=>{return{province:item.province,num:item.num}})};
        if(!list0)
        {list1=[
          { province: '无', value: 0 },

        ];}
        return list1;
    };
      const data =transfer(pageData0);

      const config = {
        data,
        xField: 'province',
        yField: 'num',
        xAxis: {
          label: {
            autoRotate: false,
          },
        },
        slider: {
          start: 0.1,
          end: 0.8,
        },
      };

  let chart: { downloadImage: () => void; toDataURL: () => any; };

  // Export Image
  const downloadImage = () => {
    chart?.downloadImage();
  };

  // Get chart base64 string
  const toDataURL = () => {
    console.log(chart?.toDataURL());
  };
      const columns = [
        { title: 'ID', width: 80, dataIndex: 'id' },
        {
          title: '姓名',
          dataIndex: 'name',
          render: (v: string, record: defs.DepartmentVO) => {
            return (
              <a
                onClick={() => {
                  setContacts({ ...record });
                  setVisible(true);
                }}
              >
                <GroupOutlined />
                <span style={{ marginLeft: 5 }}>{v}</span>
              </a>
            );
          },
        },
        { title: '电话号码',width:150, dataIndex: 'phone' },
        { title: '邮箱', width: 150, dataIndex: 'emil' },
        { title: '所在省份', width: 150, dataIndex: 'province' },
        { title: '工作地', width: 150, dataIndex: 'workplace' },
        { title: '地址', width: 200, dataIndex: 'address' },
        {
          title: '操作',
          width: 120,
          render: (_: any, record: defs.ContactsVO) => (
            <>
              <a
                onClick={() => {
                  setContacts({ ...record });
                  setVisible(true);
                }}
              >
                修改
              </a>
              <Divider type="vertical" />
              <a
                onClick={() => {
                  handleDelete([`${record.id}`]);
                }}
              >
                删除
              </a>
            </>
          ),
        },
      ];
      const handleDelete = async (ids: string[] | number[]) => {
        const modal = Modal.confirm({
          centered: true,
          title: `您确定要删除选定的${ids.length}个联系人吗？`,
          okText: '确定',
          cancelText: '取消',
          onOk: async () => {
            modal.update({
              okButtonProps: {
                loading: true,
              },
            });
            const success = await API.contacts.remove.request(
              {},
              ids as number[],
            );
            if (success) {
              message.success("删除成功！")
              fetchList({
                ...searchProps,
                page: 1,
              });
              selectRow([]);
              getMaplist();
            }
          },
        });
      };
      const handleSave = (values: defs.ContactsDTO) => {
        let result: Promise<number>;
        if (contacts?.id) {
          result = API.contacts.update.request(
            {},
            {
              id: contacts.id,
              ...values,
            },
          );
        } else {
          result = API.contacts.insert.request({}, values);
        }
        result.then(() => {
          setVisible(false);
          message.success('保存成功！');
          getMaplist();
          fetchList({
            ...searchProps,
          });
        });
      };
      const buttons: ButtonItem[] = [
        {
          text: '新增',
          icon: <FileAddOutlined />,
          type: 'primary',
          onClick: () => {
            setContacts(undefined);
            setVisible(true);
            getMaplist();
          },
        },
        {
          text: '删除',
          icon: <DeleteOutlined />,
          disabled: selectedRowKeys.length === 0,
          type: 'primary',
          onClick: () => {handleDelete(selectedRowKeys);
                           getMaplist();}
        },
        {
          text: '显示联系人信息',
          icon: <EyeTwoTone />,
          type: 'primary',
          onClick: () => getMaplist(),
        },
      ];
      const { list, page, total } = pageData;
      return (
        <>
          <CustomTable
            loading={loading}
            columns={columns}
            buttons={buttons}
            dataSource={list || []}
            current={page}
            size="middle"
            total={total}
            genRowKey={(record: defs.ContactsVO) => `${record.id}`}
            onPagination={(current: number) => {
              const newSearchProps = {
                ...searchProps,
                page: current,
              };
              changeSearchProps(newSearchProps);
              fetchList(newSearchProps);
            }}
            rowSelection={{
              columnTitle: '选择',
              columnWidth: 50,
              selectedRowKeys,
              onChange: (keys: string[]) => selectRow(keys),
            }}
          >
                  <SearchFilter
          searchProps={searchProps}
          changeSearchProps={(props) => {
            changeSearchProps({
              ...searchProps,
              ...props,
            });
          }}
          onSearch={() => {
            fetchList(searchProps);
          }}
        />
          </CustomTable>
    
          <InputDialog
            visible={visible}
            detailData={contacts}
            onClose={() => setVisible(false)}
            onSubmit={handleSave}
          />               
          <div >
          <Divider />
          <Title level={3}>联系人分布</Title>
          </div>
           <div>
 

      <Column {...config} />
    </div>
        </>
      );

}