const display=document.getElementById("display");

function ToDisplay(input){
    display.value +=input;

}

function ToClear(){
    display.value = "";

}
function ToCaculate(){
   //display.value =("Hello World");
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}