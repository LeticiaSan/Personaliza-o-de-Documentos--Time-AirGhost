import React, {useState} from 'react';
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
      const [SectionNumber, setSectionNumber] = useState('');
      const [SubSectionNumber, setSubSectionNumber] = useState('');
      const [BlockNumber, setBlockNumber] = useState('');
      const [BlockName, setBlockName] = useState('');
      const [Code, setCode] = useState('');
      const [TagNumber, setTagNumber] = useState('');
      const [TagName, setTagName] = useState('');
      async function handleSubmit(e){
            e.preventDefault();
            const response = await api.post('/codelist', {
                  SectionNumber,
                  SubSectionNumber,
                  BlockNumber, 
                  BlockName, 
                  Code, 
                  TagNumber, 
                  TagName
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
                        
                              
                        <form onSubmit={handleSubmit}>
                        
                        <p>
                              Section Number 
                              <input
                              required
                              value={SectionNumber}
                              onChange={e => setSectionNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Subsection Number 
                              <input
                              required
                              value={SubSectionNumber}
                              onChange={e => setSubSectionNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Block Number
                              <input
                              required
                              value={BlockNumber}
                              onChange={e => setBlockNumber(e.target.value)} 
                              />
                        </p>
                        <p>
                              Block Name
                              <input
                              required
                              value={BlockName}
                              onChange={e => setBlockName(e.target.value)} 
                              />
                        </p>
                        <p>
                              Code
                              <input
                              required
                              value={Code}
                              onChange={e => setCode(e.target.value)} 
                              />
                        </p>
                        <p>
                              Tag Number 
                              <input
                              required
                              value={TagNumber}
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