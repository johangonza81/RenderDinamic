import Formulario from "./Componentes/Formulario"
import Listado from "./Componentes/Listado";
import Buscador from "./Componentes/Buscador";
import Alerta from "./Componentes/Alerta";
import { useState } from "react";
import { BaseColaboradores } from "./Componentes/BaseColaboradores";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [colaboradores,setColaboradores] = useState(BaseColaboradores)
  const [alerta,setAlerta]= useState({tipo:"",mensaje:""})
  const [buscaColaborador,setBuscaColaborador] = useState(colaboradores)
  return (
    <>
    <div className="contePadre">
    <h4>Buscar Colaborador</h4>
    <div className="conteBusca">
    <Buscador 
    colaboradores={colaboradores}
    setColaboradores={setColaboradores}
    buscaColaborador={buscaColaborador} 
    setBuscaColaborador={setBuscaColaborador} 
    /> 
    </div>
    <div className="contealert"><Alerta tipo={alerta.tipo} mensaje={alerta.mensaje}/></div>
    <h1>Lista Colaboradores</h1>
    <div className="container">
    
    
    <div className="contetable">
    <Listado 
    colaboradores={colaboradores} 
    setColaboradores={setColaboradores}
    />
    </div>
    <div className="conteform">
      <Formulario 
      setColaboradores={setColaboradores} 
      colaboradores={colaboradores}  
      setAlerta={setAlerta} 
      />
    </div>
    </div> 
    </div>   
    </>
  )
}

export default App
