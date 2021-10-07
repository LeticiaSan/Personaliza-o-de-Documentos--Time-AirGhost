import 'antd/dist/antd.css';
import { Table } from 'antd';
import React, { useState, useEffect } from "react";
import api from "../services/api";
    function Tables(){
        const [getItens, setGetItens] = useState([]);
        useEffect(()=>{
            async function getItens(){
                  const response = await api.get('/codelist',);
                  setGetItens(response.data)
            }
            getItens()
      },[]);
        const columns = [
        {
            title: 'Nº Section',
            dataIndex: 'Nº Section',
            key: 'Nº Section',
        },
        {
            title: 'Nº Subection',
            dataIndex: 'Nº Subection',
            key: 'Nº Subection',
        },
        {
            title: 'Nº Block',
            dataIndex: 'Nº Block',
            key: 'Nº Block',
        },
        {
            title: 'Block Name',
            key: 'Block Name',
            dataIndex: 'Block Name',
        },
        {
            title: 'Code',
            key: 'Code',
            dataIndex: 'Code',
        },
        {
            title: 'Nº Tag',
            key: 'Nº Tag',
            dataIndex: 'n tag',
        },
        {
            title: 'Tag Name',
            key: 'Tag',
            dataIndex: 'Tag',
        },
        ];
        
        const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        ];

        return(<Table columns={columns} dataSource={data} /> );
    }
    export default Tables;