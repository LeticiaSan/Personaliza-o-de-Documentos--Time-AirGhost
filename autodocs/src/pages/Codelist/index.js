import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Select, Modal, Button } from "antd";
import Header from "../../components/header";
import Tables from "../../components/table";
import "../../styles/Codelist.css";
import Mais from "../../Imagens/mais.png";

function Codelist() {
  const { Option } = Select;

  function onCancel() {
    onChange("Digite o Manual");
    setManualVisible(false);
    refreshPage();
  }
  let fk_manual=0;
  function onChange(value) {
    console.log(`selected ${value}`);
    if (value === "Novo Manual") {
      setManualVisible(true);
    }
    fk_manual = value;
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
  function refreshPage() {
    window.location.reload();
  }

  const [visibleManual, setManualVisible] = useState(false);
  const [name_manual, setManualName] = useState("");
  const [visibleLine, setVisibleLine] = useState(false);
  const [visibleTag, setVisibleTag] = useState(false);
  const [number_section, setSectionNumber] = useState("");
  const [number_subsection, setSubSectionNumber] = useState("");
  const [number_block, setBlockNumber] = useState("");
  const [name_block, setBlockName] = useState("");
  const [code, setCode] = useState("");
  const [fk_tag, setTagNumber] = useState("");
  const [TagName, setTagName] = useState("");
  async function HandleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/codelist", {
      fk_tag,
      //TagName
      fk_manual,
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
  async function submitManual(e) {
    e.preventDefault();
    const response = await api.post("/manual", {
      name_manual,
    });
    setManualName("");
  }

  const [getItens, setGetItens] = useState([]);

  useEffect(() => {
    async function getLines() {
      const response = await api.get("/manual");
      console.log(response.data);
      setGetItens(response.data);
    }
    getLines();
  }, []);
  return (
    <>
      <Header />
      <p class="select">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Digite o Manual"
          optionFilterProp="children"
          onChange={onChange} // Feita condição linha  17
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Novo Manual">Novo Manual</Option>
          {getItens.map((data) => (
            <Option value={data.id_manual}>{data.name_manual}</Option>
          ))}
        </Select>
      </p>

      <Modal
        title="Novo Manual"
        centered
        visible={visibleManual}
        width={1300}
        footer={[]}
      >
        <form onSubmit={submitManual}>
          <ul class="form">
            <ui id="letra">
              <b> Nome do Manual: </b>
            </ui>
            <ui id="inputManual">
              <input
                required
                value={name_manual}
                onChange={(e) => setManualName(e.target.value)}
              />
            </ui>
          </ul>

          <button onClick={() => onCancel()} id="cancelar">
            Cancelar
          </button>
          <button type="submit" id="salvar">
            Salvar
          </button>
        </form>
      </Modal>

      <Button id="createTag" onClick={() => setVisibleTag(true)}>
        Nova Tag &nbsp;
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
                value={fk_tag}
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
                value={fk_tag}
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
        <Tables id={fk_manual}/>
      </p>
    </>
  );
}
export default Codelist;
