import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './countries.css';

function Countries() {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();

    const dispatch = useDispatch();

    function fetchCountries() {
        console.log("fecth the counries");
        const config = {
            method: 'get',
            url: 'https://covid-19-data.p.rapidapi.com/help/countries',
            headers: {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "74f7716aa8mshce951fd8a5e07d6p12ca86jsnac88f99134db"
            }
        }

        axios(config)
            .then(function (response) {
                setCountries(response.data);

            })
    }

 

 

    function onCountrySelect(e) {
        setSelectedCountry(e.target.value);
        dispatch({
            type:"SELECT_COUNTRY",
            text: e.target.value
        })
    }
    useEffect(fetchCountries, [])

    return (
        <div className="App">
            <header style={{ 'background': '#926239' }}>
                <h1 style={{ 'color': 'white', 'width': '800px', 'margin': '0 auto' }}>COVID WORLD STATS</h1>
            </header>
            <div class="section-b">
                <div>
                </div>
                <label for="countries">Choose a country:</label>
                <select id="countries" onChange={onCountrySelect}>
                    {
                        countries.map(country => <option value={country.alpha2code}>{country.name}</option>)
                    }
                </select>



  

            </div>
        </div>
    );
}

export default Countries;
