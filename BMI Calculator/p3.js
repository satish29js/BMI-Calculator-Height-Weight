const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }

    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show the result
        if(bmi<18.5){
            result.innerHTML=`<span>${bmi}</span> shows the under weight`
        }
        else if(bmi>18.5 || bmi<24.9){
            result.innerHTML=`<span>${bmi}</span> shows normal weight`
        }
        else if(bmi>24.9){
            result.innerHTML=`<span>${bmi}</span> shows over weight`
        }
    }
});