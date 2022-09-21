import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {

    let [countries, setCountries] = useState([]);
    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
        .then(response => response.json())
        .then(data => setCountries(data));
    },[])
    countries = countries.slice(0,20);
    return (
        <div>
            <h2>Countries: {countries.length} </h2>
            <div className='countries-container'>
            {
                // should give a key which has the unique value example is id
                countries.map(country => <Country country = {country} key = {country.cca3}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;