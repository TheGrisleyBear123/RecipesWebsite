document.addEventListener('DOMContentLoaded', () => {
    //prepTime, cookTime, additionalTime, totalTime, numPeople, numBurritos
    const prepTime = document.getElementById("prep_time"); 
    const cookTime = document.getElementById("cook_time"); 
    const additionalTime = document.getElementById("additional_time"); 
    const totalTime = document.getElementById("total_time"); 
    const numPeople = document.getElementById("num_people"); 
    const numBurritos = document.getElementById("num_burritos");
    //Slider 
    const slider = document.getElementById("myRange"); 
    slider.addEventListener("input", () => {
        let sliderVal = slider.value; 
        numBurritos.innerText = sliderVal + " Burritos"; 
        numPeople.innerText = sliderVal/2 + " People"; 
    });

}); 