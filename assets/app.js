// selection 
const btn  = document.getElementById('btn');
const color = document.querySelector('.color')


// addEventListener to button 
btn.addEventListener('click', function(){
    const colorChnage = random__Color_generate();
    color.textContent = random__Color_generate();
    document.body.style.backgroundColor = random__Color_generate();

})

// function for generate random color 
const  random__Color_generate = () => {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    let alphaNumber = (Math.random() * 1);
    return`rgba(${red}, ${green}, ${blue}, ${alphaNumber.toFixed(1)})`
 
}