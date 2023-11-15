
import { React,useState } from "react";
import {  Alert, Button, Form } from "react-bootstrap";




    const Formulario = ({colaboradores, setColaboradores,setAlerta}) =>{
        const [input, setInput] = useState({});
        const [idCounter, setIdCounter] = useState(4)
    
        function handleInput(e) {
            setInput({ ...input, [e.target.name]: e.target.value });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
        
        
            
        if (input.nombre === "" || input.correo === "" || input.edad === "" || input.cargo === ""  || input.telefono === ""){  
            setAlerta({tipo:'danger', mensaje:'Todos los campos son obligatorios'})
            return;
        }
                
            
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(input.correo)) {
            setAlerta({tipo:'danger', mensaje:'Ingrese un correo electrónico válido'})
            return; 
        }
        
        
        
        
           
         
        setColaboradores([...colaboradores,{id:idCounter, ...input}]);  
        setIdCounter(idCounter + 1)  
        setAlerta({tipo:'primary', mensaje:'Formulario Enviado'})  
        
        setInput({
            nombre:"",
            correo:"",
            edad:"",
            cargo:"",
            telefono:""
            
        
        }) 
        }
    
   
    return(
        <>
        <Form onSubmit ={(e)=>handleSubmit(e)}>
        <Form.Group>
                <Form.Label><h5><strong>Nombre</strong></h5></Form.Label>
                <Form.Control 
                name ='nombre' 
                type="text"
                placeholder='Ingrese su Nombre'
                value={input.nombre}
                onChange={(e) => handleInput(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label><h5><strong>Email</strong></h5></Form.Label>
                <Form.Control 
                name ='correo'
                type="email" 
                placeholder='Ingrese su Email'
                value={input.correo}
                onChange={(e) => handleInput(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label><h5><strong>Edad</strong></h5></Form.Label>
                <Form.Control 
                name ='edad' 
                type="number"
                placeholder='Ingrese su Edad'
                value={input.edad}
                onChange={(e) => handleInput(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label><h5><strong>Cargo</strong></h5></Form.Label>
                <Form.Control 
                name ='cargo' 
                type="text"
                placeholder='Ingrese su Cargo'
                value={input.cargo}
                onChange={(e) => handleInput(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label><h5><strong>Telefono</strong></h5></Form.Label>
                <Form.Control 
                name ='telefono' 
                type="number"
                placeholder='Ingrese su Telefono'
                value={input.telefono}
                onChange={(e) => handleInput(e)}/>
            </Form.Group>
            <Button className="btn1" type="submit">Agregar Colaborador</Button>
            
       </Form>
        </>
    )
    }


export default Formulario;