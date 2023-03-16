/*
 * @文件描述: 首页
 * @公司: 山东大学
 * @作者: 李洪文
 * @LastEditors: 李洪文
 * @Date: 2019-05-09 15:40:17
 * @LastEditTime: 2020-04-01 12:20:55
 */
import { useEffect } from 'react';
import styles from './index.less';
import { Input, Form, Modal, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: { span: 20 },
};
const { TextArea } = Input;
export interface HomepageProps {
  visible: boolean;
  detailData?: defs.ContactsDTO;
  onClose: () => void;
  onSubmit: (data: defs.ContactsDTO) => void;
}

export default function InputForm(props: HomepageProps) {
  const [form] = useForm();
  useEffect(() => {
    if (props.detailData) {
      form.setFieldsValue(props.detailData);
    } else {
      form.resetFields();
    }
  }, [props.detailData, props.visible]);

  const onFinish = (values: any) => {
    props.onSubmit(values);
  };
  return (
    <Modal
      title={!!props.detailData ? '修改联系人' : '新增联系人'}
      visible={props.visible}
      width={800}
      okText="确定"
      centered
      getContainer={false}
      onCancel={() => {
        props.onClose();
      }}
      onOk={form.submit}
    >
      <Form
        {...layout}
        name="basic"
        form={form}
        className={styles.form}
        onFinish={onFinish}
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '请输入联系人姓名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="电话"
          name="phone"
          rules={[{ required: true, message: '请输入联系人电话' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="emil"
        >
          <Input />
        </Form.Item>

        <Form.Item label="省份" name="province">
        <Select >
          <Select.Option value="山东省">山东省</Select.Option>
          <Select.Option value="北京市">北京市</Select.Option>
          <Select.Option value="天津市">天津市</Select.Option>
          <Select.Option value="重庆市">重庆市</Select.Option>
          <Select.Option value="山西省">山西省</Select.Option>
          <Select.Option value="内蒙古自治区">内蒙古自治区</Select.Option>
          <Select.Option value="新疆维吾尔族自治区">新疆维吾尔族自治区</Select.Option>
          <Select.Option value="宁夏回族自治区">宁夏回族自治区</Select.Option>
          <Select.Option value="上海市">上海市</Select.Option>
          <Select.Option value="香港特别行政区">香港特别行政区</Select.Option>
          <Select.Option value="澳门特别行政区">澳门特别行政区省</Select.Option>
          <Select.Option value="河南省">河南省</Select.Option>
          <Select.Option value="河北省">河北省</Select.Option>
          <Select.Option value="湖南省">湖南省</Select.Option>
          <Select.Option value="湖北省">湖北省</Select.Option>
          <Select.Option value="广西省">广西省</Select.Option>
          <Select.Option value="广东省">广东省</Select.Option>
          <Select.Option value="江东省">江西省</Select.Option>
          <Select.Option value="江苏省">江苏省</Select.Option>
          <Select.Option value="浙江省">浙江省</Select.Option>
          <Select.Option value="陕西省">陕西省</Select.Option>
          <Select.Option value="吉林省">吉林省</Select.Option>
          <Select.Option value="辽宁省">辽宁省</Select.Option>
          <Select.Option value="黑龙江省">黑龙江省</Select.Option>
          <Select.Option value="海南省">海南省</Select.Option>
          <Select.Option value="甘肃省">甘肃省</Select.Option>
          <Select.Option value="台湾省">台湾省</Select.Option>
          <Select.Option value="安徽省">安徽省</Select.Option>
          <Select.Option value="四川省">四川省</Select.Option>
          <Select.Option value="云南省">云南省</Select.Option>
          <Select.Option value="青海省">青海省</Select.Option>
        </Select>
      </Form.Item>
        <Form.Item
          label="工作地点"
          name="workplace"
        >
          <Input />
        </Form.Item>

        <Form.Item label="地址：" name="address">
          <TextArea
            rows={2}
            placeholder="地址"
            allowClear={true}
            onChange={() => {}}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
