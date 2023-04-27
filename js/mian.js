// chanage background navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// Calulate IBM



const Caluate_input = document.getElementById("Caluate_input"),
      inputHegith  = document.getElementById("input-hegith"),
      inputWeight = document.getElementById("input-Weight"),
      error_input  = document.getElementById("error-input")




function calculateBmi(){
 // Cheack the filed have a value

 if(inputHegith.value === "" || inputWeight.value === ""){
        
    // Add and Remove color
    error_input.classList.remove("green-color");
    error_input.classList.add("red-color")

    // Show The message
    error_input.textContent= "Fill in the Height and Weight 🤷‍♀️🤷‍♀️"

    // Remove This Message  after 3sceond

    setTimeout(()=>{
        error_input.textContent=""
    },3000)
}else{
    // BIM Formula
    const cm = inputHegith.value/100,
           kg = inputWeight.value,

           bmi = Math.round(kg/(cm * cm))

           // Show your health status
           if(bmi < 18.5){
            //Add color and display message
             error_input.classList.add("green-color");
             error_input.textContent = `Your IBM is ${bmi} and you are skinny 😒`
           }else if(bmi < 25){
            //Add color and display message
            error_input.classList.add("green-color");
            error_input.textContent = `Your IBM is ${bmi} and you are healthy 😊 `
           }else{
            //Add color and display message
            error_input.classList.add("green-color");
            error_input.textContent = `Your IBM is ${bmi} and you are overwight 😭 `
           }

           // To Clear the input filed
           inputHegith.value="";
           inputWeight.value="";

           // Remove this message IBM
           setTimeout(()=>{
            error_input.textContent="";
           },3000)
}
}

// Email js


function checkInput() {
    // Get the input and message elements
    const input = document.getElementById("myInput");
    const message = document.getElementById("message");
    
    // Check if the input field is empty
    if (input.value === "") {
        message.classList.add("red-color")
      message.textContent = "The input field is empty ☝☝";

      // Remove The Message
      setTimeout(()=>{
        message.textContent = "";

      },3000)
    } else{
        message.classList.add("green-color")
        message.textContent = "successfully registered 👌👌";
        input.value=""
        setTimeout(()=>{
            message.textContent = "";
    
          },3000)

    }
  }
  
  // Get the button element
const scrollBtn = document.getElementById("scrollBtn");

// Show the button when the user scrolls down 1000px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  // Make Scroll Reaval 

const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true, Animation
})

sr.reveal(`.box-content-home, .header-About, .box-content-chooes, .footer`)
sr.reveal(`.box-img-home, .box-img-chooes, .box-img-cal`,{origin:'bottom'})
sr.reveal(`.box-about, .box-pricing, .box-content-cal,.box-input-cal,.button-cal`,{interval:100})