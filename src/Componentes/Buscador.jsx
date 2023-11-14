
import { Alert,Form, Button } from "react-bootstrap"


const Buscador = ({colaboradores, setColaboradores,buscaColaborador,setBuscaColaborador,setAlerta}) => {
   
     
    const handlerBuscar=(e) => {
        e.preventDefault();

   
       
    const colaboradoresFiltrados= colaboradores.filter((colaborador) => 
    colaborador.nombre === buscaColaborador );


    if(colaboradoresFiltrados.length > 0){
    setColaboradores(colaboradoresFiltrados)
    }else { 
    setAlerta({tipo:'danger', mensaje:'Colaborador no encontrado intente de nuevo'})
      
    }
    
} 
   
    return(
        <>
           
        
    
<Form>
        <Form.Group className="formula">
                
                <Form.Control 
                type="text"  
                placeholder="Ingrese Datos del Colaborador " 
                onChange={(e) => setBuscaColaborador(e.target.value)}/>
                <Button type="text" onClick={(e)=>handlerBuscar(e)}>
                Buscar Colaborador 
                </Button>
                
                
            </Form.Group>
</Form>
</>


   )} 
export default Buscador;