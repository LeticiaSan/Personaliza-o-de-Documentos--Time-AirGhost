//import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import '../../styles/Main.css';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import Document from '../../Imagens/document.png';
import Documents from '../../Imagens/documents.png';
import Folder from '../../Imagens/folder.png';
import Light from '../../Imagens/light.png';

function Main() {
  return (
  document.getElementById('container'),
    <div class="App">
      <Header/>
          <h1 id = "titulo"> Por onde iremos começar ? <img class ="light" alt ="" src={Light}/>
            <h2 id = "sub-titulo"> Selecione abaixo o que deseja fazer
              <header className="App-header"> 
                <h1>
                  <div id = "menu">
                      <td><Link to="/codelist"><Button><img class ="img" alt ="" src={Document}/><br/> Controle de fragmentos alterados </Button></Link> </td>
                      <td><Link to="/lep"><Button> <img class ="img" alt ="" src={Documents}/><br/>Lista de páginas efetivas</Button> </Link> </td>
                      <td><Button  ><img class ="img" alt ="" src={Folder}/><br/> Compilador PDF</Button> </td>
                  </div>
                </h1>
              </header>
            </h2>
          </h1>
    </div>
  );
}
export default Main;
