
import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './customer.css';

function Vatsal() {

    const { coffeePot } = useSelector( state => state);

    const dispatch = useDispatch();

    function fillcoffeePot(){
        dispatch(
            {type : "FILL_COFFEE_POT"}    // actions
            )   
    }

    function drinkCoffee(){
        dispatch(
            {type : "DRINK_COFFEE"}    // actions
            )   
    }

    function eatBiscuits(){
        dispatch(
            {type : "EAT_BISCUITS", text:1}    // actions
            )   
    }

    return (
        <div className="App">

            <div class="section-b">
                <div>
                </div>
                <label for="customer">Im Employee : Vatsal</label>
                <button onClick={fillcoffeePot}>fill Coffee Pot</button>
                <button onClick={drinkCoffee}>drink Coffee </button>
                <button onClick={eatBiscuits}>Eat Biscuits</button>
                <div>I can acess Coffee : {coffeePot}</div>
            </div>
        </div>
    );
}

export default Vatsal;
