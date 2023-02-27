import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h2>
               Nombre: {contacto.name}
               Apellido: {contacto.apellido}
               Email: {contacto.email}
            </h2>
            <h5>
                Esta tarea esta: {contacto.online ? 'OFFLINE':'ONLINE'}
            </h5>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
