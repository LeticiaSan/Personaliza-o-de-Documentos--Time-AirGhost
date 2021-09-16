//import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import '../../styles/Main.css';
import { Button } from 'antd';


function Main() {
  return (
  document.getElementById('container'),
    <div className="App">
      <header className="App-header"> 

      </header>
      <div>
        <>
        <tr id = "menu">
          <td><Button type="primary" >Primary Button</Button> </td>
          <td><Button type="primary" >Primary Button</Button> </td>
          <td><Button type="primary" >Primary Button</Button> </td>
        </tr>
        </>
      </div>
    </div>
  );
}
export default Main;
