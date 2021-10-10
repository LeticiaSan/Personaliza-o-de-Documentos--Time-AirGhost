import 'antd/dist/antd.css';
import { Table } from 'antd';
import React, { useState, useEffect } from "react";
import api from "../services/api";
    function Tables(){
        const [getItens, setGetItens] = useState([]);
        useEffect(()=>{
            async function getLines(){
                  const response = await api.get('/codelist?id=');
                  console.log(response.data);
                  setGetItens(response.data);
            }
            getLines();
      },[]);
        const columns = [
        {
            title: 'Nº Section',
            dataIndex: 'NºSection',
            key: 'NºSection',
        },
        {
            title: 'Nº Subection',
            dataIndex: 'NºSubection',
            key: 'NºSubection',
        },
        {
            title: 'Nº Block',
            dataIndex: 'NºBlock',
            key: 'NºBlock',
        },
        {
            title: 'Block Name',
            key: 'BlockName',
            dataIndex: 'BlockName',
        },
        {
            title: 'Code',
            key: 'Code',
            dataIndex: 'Code',
        },
        {
            title: 'Nº Tag',
            key: 'NºTag',
            dataIndex: 'NºTag',
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
            Code: getItens.code,
            Tag: getItens.id_codelist,
            NºTag: getItens.id_tag,
            BlockName: getItens.name_block,
            NºBlock: getItens.number_block,
            NºSubection: getItens.number_subsection,
            NºSection: getItens.number_section
        },
        {
            key: '2',
            Code: 'John Brown',
            Tag: 32,
            NºTag: 1,
            BlockName: 'Letter',
            NºBlock: 1,
            NºSubection: 'oi',
            NºSection: 'boi'
        },
        {
            key: '3',
            Code: 'John Brown',
            Tag: 32,
            NºTag: 1,
            BlockName: 'Letter',
            NºBlock: 1,
            NºSubection: 'oi',
            NºSection: 'boi'
        }
        ];

        return(<Table columns={columns} dataSource={data} /> );
    }
    export default Tables;