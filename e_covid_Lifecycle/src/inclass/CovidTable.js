import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './countries.css';

function CovidTable(props) {
    const [covidDetails, setCovidDetails] = useState({});


    function onGoClick(e) {
        if(props.selectedCountry){
            const config2 = {
                method: 'get',
                url: `https://covid-19-data.p.rapidapi.com/country/code?code=${props.selectedCountry}`,
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

    }


    useEffect(onGoClick, [props.selectedCountry]) 

    return (
        <div className="App">
            <table id='coviddetails'>
                {
                    Object.entries(covidDetails).map(element => <tr>
                        <td>{element[0]}</td>
                        <td>{element[1]}</td>
                    </tr>)

                }

            </table>
        </div>
    );
}

export default CovidTable;
