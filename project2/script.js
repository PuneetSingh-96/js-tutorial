//BMI calculator

const form = document.querySelector('form')

//this will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height == '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight == '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span style = "color : black;">${bmi}</span>`;
    }
    if(bmi < 18){
        console.log("You are Under Wieght");
    }
    else if(bmi >18 && bmi < 25){
        console.log("You are Normal Weight");
    }
    else{
        console.log("You are Over Wieght");
    }
})