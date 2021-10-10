import React from 'react';
import Header from '../../components/header';
import '../../styles/LEP.css';
function LEP() {
    return (
        <>
        <Header/>
        <body>
            <div class='body'>
                <div class='style'>
                <h2 id='manual'>Nome do Manual 
                <input class='input' type='text' placeholder='Nome do Manual'></input></h2>
                </div> 

            <div class='style'>
                <h2>Tag</h2>
                <input class='input' id='tag' type='text' placeholder='Tag'></input>
            </div>
            <hr size="50"/>
            <div class='style'>
                <h2>Data do Documento Original</h2>
                <input class='input' id="date" type="date"></input>
            </div>

            <div class='adicionar'>
                <h2>Adicionar Revisão</h2>
                <input class='input' id="date" type="date"></input>
                <button class='botao' id='add'><p id='mais'>+</p></button>
            </div>

            <div class='botoes'>
                <button class='botao'>Cancelar</button>
                <button class='botao'>Criar</button>
            </div>
            </div> 
        </body>
        
        </>

           
    );
  }
  export default LEP;
