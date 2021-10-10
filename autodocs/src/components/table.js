import 'antd/dist/antd.css';
import { Table } from 'antd';
import React, { useState, useEffect } from "react";
import api from "../services/api";
    function Tables(id){
        const [getItens, setGetItens] = useState([]);
        useEffect(()=>{
            async function getLines(){
                  const response = await api.get(`/codelist?id=1`);
                  console.log(response.data);
                  setGetItens(response.data);
            }
            getLines();
      },[getItens, id]);
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
        const datas =
        getItens.map((data) => ( 
        
        {
            key: '1',
            Code: data.code,
            Tag: data.id_codelist,
            NºTag: data.fk_tag,
            BlockName: data.name_block,
            NºBlock: data.number_block,
            NºSubection: data.number_subsection,
            NºSection: data.number_section
        }
         ))
        return(<Table columns={columns} dataSource={datas} /> );
    }
    export default Tables;