import React from 'react'
import { FormInp } from './components/FormInp'
import { useState } from 'react';
import './styles.css'
import { useRef } from 'react';


export const Form = () => {
    const [values, setValues] = useState({
        usuario: '',
        email: '',
        fech_nac: '',
        pass: '',
        c_pass: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'usuario',
            type: 'text',
            placeholder: 'Usuario',
            errorMessage:'El usuario debe de contener 3-16 caracteres y no debe contener caracteres especiales',
            label: 'Usuario',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'E-mail invalido!',
            label: 'Email',
            required: true
        },
        {
            id: 3,
            name: 'fech_nac',
            type: 'date',
            placeholder: 'Fecha de Nacimiento',
            label: 'Fecha de Nacimiento',
        },
        {
            id: 4,
            name: 'pass',
            type: 'password',
            placeholder: 'Password',
            errorMessage:'La contraseña debe tener 8-20 caracteres; incluyendo mayúsculas, números y caracteres especiales',
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: 'c_pass',
            type: 'password',
            placeholder: 'Confirmar Password',
            errorMessage:'Error de confrimación contraseña',
            label: 'Confirmar Password',
            pattern: values.c_pass,
            required: true,
        },
    ];
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log(values);

    return <div className='form-main'>
        <form onSubmit={handleSubmit}>
            <h1>Registro</h1>
            {inputs.map((input)=> (
                <FormInp key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            ))}
            <button>Registrar</button>
        </form>
    </div>
}
