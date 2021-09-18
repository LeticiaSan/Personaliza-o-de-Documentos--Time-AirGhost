import React, {useState} from 'react';
import api from '../../services/api';

function Codelist() {
      const [generico, setGenerico] = useState('')

      async function handleSubmit(e){
            
            e.preventDefault();
            const response = await api.post('/genetico', {
                  generico
            })
            setGenerico('');
      }
    return (
          <>
             <h1> Olá </h1>
             <form onSubmit={handleSubmit}>
                  <input
                  required
                  value={generico}
                  onChange={e => setGenerico(e.target.value)} 
                  />
                  <button type="submit">Cadastrar</button>
             </form>
          </>
    );
  }
  export default Codelist;