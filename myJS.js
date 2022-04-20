/*
* Excercise 1
*
*/
var colorBlock = document.getElementById("color-block");
colorBlock.addEventListener("click", changeColor);
var change = true;
const firstColor = "#F08080";
const secondColor = "#0000FF";
var colorName = document.getElementById("color-name")

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(change){
        //change the background color using JS
        colorBlock.style.background = secondColor;
        //Change the text of the color using the span id color-name
        colorName.textContent = secondColor;
    }
    else{
        //change the background color using JS
        colorBlock.style.background = firstColor;
        //Change the text of the color using the span id color-name
        colorName.textContent = firstColor;
    }
    change = !change;
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
var convertButton = document.getElementById("convertbtn");
convertButton.addEventListener('click', convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    var fTemp = document.getElementById("f-input").value;
    //Send the calculated temperature to HTML
    var cTemp = ( fTemp - 32 ) * (5/9);
    var output = document.getElementById("c-output");
    output.innerHTML = cTemp;
}


