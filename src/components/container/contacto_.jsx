import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';



const Contacto_Component = () => {

    const defaultContacto = new Contacto ('Antonio', 'Alvarez', 'intentodepirata@hotmail.com', false );

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div>
                <h1>
                    Usuario:
                </h1>
                {/* TODO: Aplicar un FOR/Map para renderizar una lista */}
                <ContactoComponent conectado={defaultContacto}></ContactoComponent>
            </div>
        </div>
    );
};



export default Contacto_Component;