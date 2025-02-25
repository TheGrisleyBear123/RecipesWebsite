document.addEventListener('DOMContentLoaded', () => {
    const prepTime = document.getElementById("prep_time"); 
    const cookTime = document.getElementById("cook_time"); 
    const additionalTime = document.getElementById("additional_time"); 
    const totalTime = document.getElementById("total_time"); 
    const numPeople = document.getElementById("num_people"); 
    const numBurritos = document.getElementById("num_burritos");

    const slider = document.getElementById("myRange");

    slider.addEventListener("input", () => {
        let sliderVal = parseInt(slider.value); 
        numBurritos.innerText = sliderVal + " Burritos"; 
        numPeople.innerText = (sliderVal / 2).toFixed(1) + " People"; 
        prepTime.innerText = (10 + sliderVal) + " minutes"; 
        cookTime.innerText = Math.floor(60 + sliderVal * 2) + " minutes"; 
        additionalTime.innerText = (20 + (sliderVal * 0.5)).toFixed(1) + " minutes"; 
        let total = parseFloat(prepTime.innerText) + parseFloat(cookTime.innerText) + parseFloat(additionalTime.innerText);
        totalTime.innerText = total + " minutes"; 
    });

});
