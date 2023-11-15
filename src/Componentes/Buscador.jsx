
import { Form, Button, Table } from "react-bootstrap"
import { BaseColaboradores } from "./BaseColaboradores";



const Buscador = ({colaboradores, setColaboradores,buscaColaborador,setBuscaColaborador,setAlerta}) => {

    
    
     
    const handlerBuscar=(e) => {
        e.preventDefault();

        if (buscaColaborador.trim() === "" ) {
            setColaboradores(BaseColaboradores);
            return;
          }
    const encontrado = colaboradores.some((colaborador) => colaborador.nombre === buscaColaborador);  
    
          if (encontrado === false){
            setColaboradores(BaseColaboradores)
            
          }
       
    const colaboradoresFiltrados= colaboradores.filter((colaborador) => colaborador.nombre === buscaColaborador );
    

    

    if(colaboradoresFiltrados.length > 0){
    setColaboradores(colaboradoresFiltrados)
    return
    }
    
  
}
    const renderTabla =() => {
        
        <Table striped bordered hover>
            <thead>
                <th >id</th>
                <th >Nombre</th>
                <th >Correo</th>
                <th >Edad</th>
                <th >Cargo</th>
                <th >Telefono</th> 
            </thead>
            <tbody>
            {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
            </tr>
            ))};
            </tbody>
        </Table>

};
    

   
        return (
            <>



                <Form>
                    <Form.Group className="formula">

                        <Form.Control
                            type="text"
                            placeholder="Ingrese Datos del Colaborador "
                            onChange={(e) => setBuscaColaborador(e.target.value)} />
                        <Button type="text" onClick={(e) => handlerBuscar(e)}>
                            Buscar Colaborador
                        </Button>


                    </Form.Group>
                </Form>

                {renderTabla()}
            </>


    )
}
export default Buscador;