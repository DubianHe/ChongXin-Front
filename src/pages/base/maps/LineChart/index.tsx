import React, { useEffect, useRef } from 'react';

import { IProps } from "./type";

import * as echarts from "echarts";


const Index: React.FC<IProps> = (props) => {


    const chartRef:any = useRef();  //拿到DOM容器


    // 每当props改变的时候就会实时重新渲染

    useEffect(()=>{

        const chart = echarts.init(chartRef.current);   //echart初始化容器

        let option = {  //配置项(数据都来自于props)

            title: {

                text: props.title ? props.title : "暂无数据",

            },

            xAxis: {

                type: 'category',

                data: props.xData,

            },

            yAxis: {

                type: 'value'

            },

            series: [{

                data: props.seriesData,

                type: 'line'

            }]

        };


        chart.setOption(option);

    }, [props]);


    return <div ref={chartRef} className="chart"></div>

}


export default Index;