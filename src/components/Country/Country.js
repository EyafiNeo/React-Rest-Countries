import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, independent, region, area, flags } = props.country;
    return (
            <div className="country-div">
                <img src={flags.png} alt="Flag" />
                <h2>{name.common}</h2>
                <p>Region: {region}</p>
                <p>Area: {area}</p>
                <p>{independent ? 'Independent' : 'Not Independent'}</p>
            </div>
    );
};

export default Country;