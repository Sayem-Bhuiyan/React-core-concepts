import {PropTypes} from 'prop-types'
import React from 'react';
import './Country.css';
const Country = ({country}) => {
    const {name, flags } = country;
    console.log(country)
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;