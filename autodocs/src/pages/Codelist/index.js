import React, { useState } from "react";
import api from "../../services/api";
import { Select, Modal, Button } from "antd";
import Header from "../../components/header";
import Tables from "../../components/table";
import "../../styles/Codelist.css";
import Mais from "../../Imagens/mais.png";

function Codelist() {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const [visibleLine, setVisibleLine] = useState(false);
  const [visibleTag, setVisibleTag] = useState(false);
  const [number_section, setSectionNumber] = useState("");
  const [number_subsection, setSubSectionNumber] = useState("");
  const [number_block, setBlockNumber] = useState("");
  const [name_block, setBlockName] = useState("");
  const [code, setCode] = useState("");
  const [id_tag, setTagNumber] = useState("");
  const [TagName, setTagName] = useState("");
  //const [id_manual, setidManual] = useState('');
  async function HandleSubmit(e) {
    /*useEffect(()=>{
                  async function getItens(){
                        const response = await api.get('/codelist',);
                        setGetItens(response.data)
                  }
                  getItens()
            },[]);*/
    //setidManual(1);
    const id_manual = 1;
    e.preventDefault();
    const response = await api.post("/codelist", {
      id_tag,
      //TagName
      id_manual,
      number_section,
      number_subsection,
      number_block,
      name_block,
      code,
    });
    setSectionNumber("");
    setSubSectionNumber("");
    setBlockNumber("");
    setBlockName("");
    setCode("");
    setTagNumber("");
    setTagName("");
  }
  return (
    <>
      <Header />
      <p class="select">
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
      </p>
      <Button id="createTag" onClick={() => setVisibleTag(true)}>
        Nova Tag &nbsp;
        <img class="mais" alt="" src={Mais} />
      </Button>
      <Button id="createCodelist" onClick={() => setVisibleLine(true)}>
        Novo Codelist &nbsp;
        <img class="mais" alt="" src={Mais} />
      </Button>

      <Modal
        title="Cadastro codelist"
        centered
        visible={visibleLine}
        width={1300}
        footer={[]}
      >      
        <form onSubmit={HandleSubmit}>
          <ul class="form">
            <ui id="label">
              <b> Section Number </b>
            </ui>
            <ui id="input">
              <input
                required
                value={number_section}
                onChange={(e) => setSectionNumber(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b>Subsection Number </b>
            </ui>
            <ui id="input">
              <input
                required
                value={number_subsection}
                onChange={(e) => setSubSectionNumber(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b>Block Number </b>
            </ui>
            <ui id="input">
              <input
                required
                value={number_block}
                onChange={(e) => setBlockNumber(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b> Block Name </b>
            </ui>
            <ui id="input">
              <input
                required
                value={name_block}
                onChange={(e) => setBlockName(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b>code </b>
            </ui>
            <ui id="input">
              <input
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b>Tag Number </b>
            </ui>
            <ui id="input">
              <input
                required
                value={id_tag}
                onChange={(e) => setTagNumber(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b>Tag Name </b>
            </ui>
            <ui id="input">
              <input
                required
                value={TagName}
                onChange={(e) => setTagName(e.target.value)}
              />
            </ui>
          </ul>

          <button type="submit" id="cadastrar">
            Cadastrar
          </button>
          <button onClick={() => setVisibleLine(false)} id="cancelar">
            Cancelar
          </button>
        </form>
      </Modal>

      <Modal
        title="Cadastro tag"
        centered
        visible={visibleTag}
        width={1300}
        footer={[]}
      >
        <form onSubmit={HandleSubmit}>
          <ul class="form">
            <ui id="label">
              <b>Tag Number </b>
            </ui>
            <ui id="input">
              <input
                required
                value={id_tag}
                onChange={(e) => setTagNumber(e.target.value)}
              />
            </ui>
          </ul>
          <ul class="form">
            <ui id="label">
              <b>Tag Name </b>
            </ui>
            <ui id="input">
              <input
                required
                value={TagName}
                onChange={(e) => setTagName(e.target.value)}
              />
            </ui>
          </ul>
          <button onClick={() => setVisibleTag(false)} id="cancelar">
            Cancelar
          </button>
          <button type="submit" id="cadastrar">
            Cadastrar
          </button>
          </form>
      </Modal>

      <p class="table">
        <Tables />
      </p>
    </>
  );
}
export default Codelist;
