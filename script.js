const disp = document.getElementById("display");


document.addEventListener("keydown",function(eve){
    var key = eve.key;
    if(key==='Enter') calculate();
    else if(key==='Escape' || key === 'c') clearDisp();
    else if(key==='Backspace'){
        disp.value = disp.value.slice(0,-1);
    }
    else if(!isNaN(key) || "+-*/.".includes(key)) addBtn(key);
});

function addBtn(inp){
    disp.value += inp;
}

function clearDisp(){
    disp.value = "";
}

function calculate(){
    disp.value = eval(disp.value);
}