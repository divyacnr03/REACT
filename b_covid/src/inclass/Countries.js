import axios from 'axios';
import React, { useState } from 'react';
import './countries.css';

function Countries() {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const [covidDetails, setCovidDetails] = useState({});

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

    function onGoClick(e) {


        const config2 = {
            method: 'get',
            url: `https://covid-19-data.p.rapidapi.com/country/code?code=${selectedCountry}`,
            headers: {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "74f7716aa8mshce951fd8a5e07d6p12ca86jsnac88f99134db"
            }
        }
        axios(config2)
            .then(countryData => {
                setCovidDetails(countryData.data[0])
            })

    }

    function onCountrySelect(e) {
        setSelectedCountry(e.target.value);
    }

    function renderTable(){
        let covidKeys = Object.entries(covidDetails)
        let covidTableRows = [];

        for(let i =0; i< covidKeys.length; i++){

            covidTableRows.push( <tr>
              <td>{covidKeys[i][0]}</td>
              <td>{covidKeys[i][1]}</td>
            </tr>)
        }
        return covidTableRows;
    }

    return (
        <div className="App">
            <header style={{ 'background': '#926239' }}>
                <h1 style={{ 'color': 'white', 'width': '800px', 'margin': '0 auto' }}>COVID WORLD STATS</h1>
            </header>
            <div class="section-b">
                <div>
                    <button onClick={fetchCountries}>Fetch Countries</button>
                </div>
                <label for="countries">Choose a country:</label>
                <select id="countries" onChange={onCountrySelect}>
                    {
                        countries.map(country => <option value={country.alpha2code}>{country.name}</option>)
                    }
                </select>
                <button onClick={onGoClick}>Go</button>
                <table id='coviddetails'>
                    {/* {
                        Object.entries(covidDetails).map(element => <tr>
                            <td>{element[0]}</td>
                            <td>{element[1]}</td>
                        </tr>)

                    } */}
                    {
                        renderTable()
                    }
                </table>

            </div>
        </div>
    );
}

export default Countries;
