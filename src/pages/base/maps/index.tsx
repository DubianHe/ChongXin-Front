import React, { useEffect, useState } from 'react';
import { Column, Line } from '@ant-design/charts';
import { list } from '@/api/mods/contacts';

const Page: React.FC = () => {
  const[pageData0,setPageData0]=useState<defs.Tongji<defs.ContactsProvinceVO>>();
    const getMaplist=async()=>
    {

       const pageData=await API.contacts.tongji.request({});
       setPageData0(pageData);
    };
    useEffect(() => {
      getMaplist();
      }, []);
      function transfer(list0:defs.Tongji<defs.ContactsProvinceVO>|undefined){let list1: any;
        if(list0)
      {list1=pageData0?.list!?.map(item=>{return{province:item.province,num:item.num}})};
        if(!list0)
        {list1=[
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
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
          end: 0.2,
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

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        保存图片
      </button>

      <Column {...config} />
    </div>
  );
};
export default Page;


