import React from 'react';
import Header from '../../components/header';
function LEP() {
    return (
        <>
        <Header/>
        <body>
            <div>
                <div class='style'>
                <h1>Nome do manual</h1> 
                <input type='text' placeholder='nome do manual'></input>
            </div>

            <div class='style'>
                <h1>TAG</h1>
                <input type='text' placeholder='TAG'></input>
            </div>

            <div class='style'>
                <h1>Data do Documento Original</h1>
                <input id="date" type="date"></input>
            </div>

            <div class='botao'>
                <h1>Adicionar revisão</h1>
                <input id="date" type="date"></input>
                <button>adicionar</button>
            </div>
        </div>
        </body>
        
        </>

           
    );
  }
  export default LEP;
