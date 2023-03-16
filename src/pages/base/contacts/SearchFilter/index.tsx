import { Button, Input } from 'antd';
import styles from '@/styles/search-filter.less';
import { render } from 'react-dom';
import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';
interface SearchFilterProps {
  onSearch: () => void;
  searchProps: defs.ContactsQueryDTO;
  changeSearchProps: (searchProps: defs.ContactsQueryDTO) => void;
}

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { searchProps, onSearch, changeSearchProps } = this.props;
  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterItem}>
        <span className={styles.label}>姓名：</span>
        <Input
          allowClear={true}
          placeholder="请输入姓名"
          value={searchProps.name}
          size="small"
          onChange={(e) =>
            changeSearchProps({
              name: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.filterItem}>
        <span className={styles.label}>单位：</span>
        <Input
          allowClear={true}
          placeholder="请输入单位"
          value={searchProps.workplace}
          size="small"
          onChange={(e) =>
            changeSearchProps({
              workplace: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.filterItem}>
        <span className={styles.label}>电话：</span>
        <Input
          allowClear={true}
          placeholder="请输入电话"
          value={searchProps.phone}
          size="small"
          onChange={(e) =>
          changeSearchProps({
              phone: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.filterItem}>
        <span className={styles.label}>省份：</span>
        <Input
          allowClear={true}
          placeholder="请输入省份"
          value={searchProps.province}
          size="small"
          onChange={(e) =>
            changeSearchProps({
              province: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.filterItem}>
        <span className={styles.label}>邮箱：</span>
        <Input
          allowClear={true}
          placeholder="请输入email"
          value={searchProps.emil}
          size="small"
          onChange={(e) =>
            changeSearchProps({
              emil: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.filterItem}>
        <span className={styles.label}>住址：</span>
        <Input
          allowClear={true}
          placeholder="请输入住址"
          value={searchProps.address}
          size="small"
          onChange={(e) =>
            changeSearchProps({
              address: e.target.value,
            })
          }
        />
      </div>
      <Button type="primary" shape='circle' size= 'large' icon={<SearchOutlined />}onClick={onSearch}>

        </Button>
    </div>
  );
}}
