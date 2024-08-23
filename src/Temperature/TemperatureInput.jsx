import React, { useState } from 'react';

function TemperatureInput() {
    const [celcius,setCelcius]=useState('')
    const [farenheit,setFarenheit]=useState('')

    const handleCelciusChange = (e) => {
     
        const inputValue = e.target.value;
        

        if (inputValue === '') {
            setFarenheit('')
            setCelcius('');
            return;
        }

        const tempCelciusValue = parseFloat(inputValue);

        if (isNaN(tempCelciusValue)) {
            setCelcius('');
            setFarenheit('');
            
        }

        const tempIncelcius = (tempCelciusValue - 32) * 5/9;
            console.log(tempIncelcius);
            
            setCelcius(tempIncelcius.toString())
            setFarenheit(inputValue)
            
         
    };
    
    const handleFarenheitChange = (e) => {
        
        const inputValue = e.target.value;

        if (inputValue === '') {
            setCelcius('')
            setFarenheit('');
            return;
        }

        const tempFarenheitValue = parseFloat(inputValue);
        console.log(tempFarenheitValue);
        

        if (isNaN(tempFarenheitValue)) {
            setFarenheit('');
            setCelcius('')
           
        }

        const tempInfarenheit = (tempFarenheitValue * 9/5) + 32;
            console.log(tempInfarenheit);//outputs 33.8 
            
            setFarenheit(tempInfarenheit.toString());
            setCelcius(inputValue)
            
        
    };

    return (
        <>
            <fieldset>
                <legend>Type temperature in Celcius</legend>
                <input
                    type="text"
                    value={celcius}
                    name='celcius'
                    onChange={handleFarenheitChange}
                />
            </fieldset>
            <fieldset>
                <legend>Type temperature in Farenheit</legend>
                <input
                    type="text"
                    value={farenheit}
                    name='farenheit'
                    onChange={handleCelciusChange}
                />
            </fieldset>
        </>
    );
}

export default TemperatureInput;
