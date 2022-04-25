lastClickedOprator='';
lastValue='';



function calc(val){
    textbox = document.getElementById("screen");
    currentValue=textbox.value;
    newValue=currentValue+val;
    document.getElementById("screen").value = newValue;
}
function addition(){
    lastClickedOprator='+';
    lastValue=document.getElementById("screen").value;
    document.getElementById("screen").value='';

}
function sustract(){
    lastClickedOprator='-';
    lastValue=document.getElementById("screen").value;
    document.getElementById("screen").value='';

}
function multi(){
    lastClickedOprator='*';
    lastValue=document.getElementById("screen").value;
    document.getElementById("screen").value='';

}
function divi(){
    lastClickedOprator='/';
    lastValue=document.getElementById("screen").value;
    document.getElementById("screen").value='';

}
function calculateresult(){
    
    result = 0;
    if (lastClickedOprator == '+'){
        currentValue = document.getElementById("screen").value; 
        result=Number(lastValue) + Number(currentValue);
        document.getElementById("screen").value = result
    }else if(lastClickedOprator == '-'){
        currentValue = document.getElementById("screen").value; 
        result=Number(lastValue) - Number(currentValue);
        document.getElementById("screen").value = result
    }else if(lastClickedOprator == '*'){
        currentValue = document.getElementById("screen").value; 
        result=Number(lastValue) * Number(currentValue);
        document.getElementById("screen").value = result
    }else if(lastClickedOprator == '/'){
        currentValue = document.getElementById("screen").value; 
        result=Number(lastValue) / Number(currentValue);
        document.getElementById("screen").value = result
    }
}
