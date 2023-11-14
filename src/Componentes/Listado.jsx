import { useState } from "react";
import { Table } from "react-bootstrap";





const Listado =({colaboradores}) =>{
    
    
    const listaColaborador=colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
            </tr>));

    return(
        <>
   
        
   
            
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
            {listaColaborador}
            </tbody>
          
            
        </Table>
        
        </>
    )
}
export default Listado;