
import React from "react";
import Alert from "react-bootstrap/Alert"

    
    const Alerta = ({tipo,mensaje}) =>{
    
    return(
        <>
        <Alert variant={tipo}>{mensaje}</Alert>
        </>
    
    )
}
export default Alerta;