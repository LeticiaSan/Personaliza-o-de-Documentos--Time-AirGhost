import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Select } from 'antd';
import { Modal, Button } from 'antd';
import Header from '../../components/header';
import Tables from '../../components/table';



      function Codelist() {

      const { Option } = Select;

      function onChange(value) {
      console.log(`selected ${value}`);
      }

      function onBlur() {
      console.log('blur');
      }

      function onFocus() {
      console.log('focus');
      }

      function onSearch(val) {
      console.log('search:', val);
      }

      const [visible, setVisible] = useState(false);
      const [number_section, setSectionNumber] = useState('');
      const [number_subsection, setSubSectionNumber] = useState('');
      const [number_block, setBlockNumber] = useState('');
      const [name_block, setBlockName] = useState('');
      const [code, setCode] = useState('');
      const [id_tag, setTagNumber] = useState('');
      const [TagName, setTagName] = useState('');
      const [getItens, setGetItens] = useState([]);
      //const [id_manual, setidManual] = useState('');
      async function HandleSubmit(e){
            useEffect(()=>{
                  async function getItens(){
                        const response = await api.get('/codelist',);
                        setGetItens(response.data)
                  }
                  getItens()
            },[]);
            //setidManual(1);
            const id_manual=1;
            e.preventDefault();
            const response = await api.post('/codelist', {
                  id_tag,
                  //TagName
                  id_manual,
                  number_section,
                  number_subsection,
                  number_block, 
                  name_block, 
                  code, 
            })
            setSectionNumber('');
            setSubSectionNumber('');
            setBlockNumber('');
            setBlockName('');
            setCode('');
            setTagNumber(''); 
            setTagName('');
      }
    return (
            <>
            <Header/>
            <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Digite o Manual"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  >
                  <Option value="ABC-1234">ABC-1234</Option>
                  <Option value="BCD-2345">BCD-2345</Option>
                  <Option value="CDE-3456">CDE-3456</Option>
            </Select>

            <Button type="primary" onClick={() => setVisible(true)}>
                  Novo Codelist (+)
            </Button>
                  
                   <Modal
                        title=""
                        centered
                        visible={visible}
                        width={1300}
                        footer={[
                              <button onClick={() => setVisible(false)}>Cancelar</button>,
                              ]}
                        >
                        
                              
                        <form onSubmit={HandleSubmit}>
                        
                        <p>
                              Section Number 
                              <input
                              required
                              value={number_section}
                              onChange={e => setSectionNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Subsection Number 
                              <input
                              required
                              value={number_subsection}
                              onChange={e => setSubSectionNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Block Number
                              <input
                              required
                              value={number_block}
                              onChange={e => setBlockNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Block Name
                              <input
                              required
                              value={name_block}
                              onChange={e => setBlockName(e.target.value)} 
                              />
                        </p>
                        <p>
                              code
                              <input
                              required
                              value={code}
                              onChange={e => setCode(e.target.value)} 
                              />
                        </p>
                        <p>
                              Tag Number 
                              <input
                              required
                              value={id_tag}
                              onChange={e => setTagNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Tag Name 
                              <input
                              required
                              value={TagName}
                              onChange={e => setTagName(e.target.value)} 
                              />
                        <button type="submit">Cadastrar</button>
                        </p>
                        </form>
                  </Modal>
                  
            <Tables/>
          </>
    );
  }
  export default Codelist;