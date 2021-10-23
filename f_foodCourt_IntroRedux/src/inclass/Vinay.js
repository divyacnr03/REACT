
import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './customer.css';

function Vinay() {

    const { coffeePot, biscuits } = useSelector( state => state);

    const dispatch = useDispatch();

    function fillcoffeePot(){
        dispatch(
            {type : "FILL_COFFEE_POT"}    // actions
            )   
    }

    function eatBiscuits(){
        dispatch(
            {type : "EAT_BISCUITS", text:2}    // actions
            )   
    }

    return (
        <div className="App">

            <div class="section-b">
                <div>
                </div>
                <label for="customer">Im Employee : Vinay</label>
                <button onClick={fillcoffeePot}>fill Coffee Pot</button>

                <button onClick={eatBiscuits}>Eat Biscuits</button>

                <div>I can acess Coffee: {coffeePot}, biscuits {biscuits}</div>

            </div>
        </div>
    );
}

export default Vinay;
