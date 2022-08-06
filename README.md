# JavaScript-Major-Project
/* Number Converter Html Code */
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Converter</title>
    <link rel="stylesheet" href="./index.css">
    <script src="./index.js"></script>
</head>
<body>
    <div id="parent">
        <h1><u>Number Converter</u></h1>
        <div id="parent1">
            <div class="from">
                <label for="from">From</label>
                <br>
                <select name="from" onchange="selectedSubjectName1()" id="from">
                    <option value="Select">Select</option>
                    <option value="Binary">Binary</option>
                    <option value="Decimal">Decimal</option>
                    <option value="Octal">Octal</option>
                    <option value="Hexadecimal">Hexadecimal</option>
                  </select>
            </div>
            <div class="to">
                <label for="to">To</label>
                <br>
                <select name="from" onchange="selectedSubjectName2()" id="to">
                    <option value="Select">Select</option>
                    <option value="Binary">Binary</option>
                    <option value="Decimal">Decimal</option>
                    <option value="Octal">Octal</option>
                    <option value="Hexadecimal">Hexadecimal</option>
                </select>
            </div>
        </div>
        <div id="child1">
            <label for="text" class="input">Enter value</label>
            <br>
            <input type="text" placeholder="Input Here....." class="input" id="input"/>
        </div>
       <div id="child2">  
        <button id="convertbtn" onclick="convert()">Convert</button>
        <button id="resetbtn" onclick="Reset()">Reset</button>
        <button id="swapbtn" onclick="swap()">Swap</button>
       </div>
       <div>
        <label for="output" class="output" id="output">Output</label>
       <br>
       <textarea name="textarea" id="textarea" cols="70" rows="5"></textarea>
        </div>
    </div>
</body>
</html>

/* Number Converter CSS Code */ 

body{
    background-image: url('./back1.jpg');
}
#parent{
    background-image: url('./back2.jpg');
    width: 650px;
    height: 550px;
    margin-left: 450px;
    margin-top: 100px;
    border: 1px solid white;
    border-radius: 5px;
    image-resolution: 100px;

   }
#parent1{
    display: flex;
}
h1{
    color: white;
    text-align: center;
}
.from{
    height: 30px;
    width: 270px;
    margin-left: 60px;
    margin-top: 30px;
    color: rgb(28, 2, 2);
    font-weight: 700;
    font-size: 20px;
}
.to{
    height: 30px;
    width: 270px;
    margin-top: 30px;
    color: rgb(20, 4, 4);
    font-weight: 700;
    font-size: 20px;
}
#from{
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 6px;
}
#to{
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 6px;
}
#child1{
    margin-top: 80px;
    margin-left: 60px;
    color: rgb(2, 11, 0);
    font-size: 20px;
    font-weight: 700;
}
.input{
    width: 520px;
    height: 50px;
    border-radius: 6px;
    border: none;
}
#convertbtn{
margin:30px 0px 50px 75px;
height: 40px;
width: 150px;
border: none;
border-radius: 100px;
background-color: chartreuse;
color: white;
font-size: 20px;
font-weight: 700;
}
#resetbtn{
margin:0px 0px 50px 20px;
height: 40px;
width: 150px;
border: none;
border-radius: 100px;
background-color: chartreuse;
color: white;
font-size: 20px;
font-weight: 700;
}
#swapbtn{
margin:0px 0px 50px 20px;
height: 40px;
width: 150px;
border: none;
border-radius: 100px;
background-color: chartreuse;
color: white;
font-size: 20px;
font-weight: 700;
}
#swapbtn[type=button] : hover{
background:white;
}
.output{
margin-left: 55px;
margin-top: 0%;
font-size: 25px;
font-weight: 700;

}
#textarea{
    margin-left: 55px;
}

/* Number Converter JavaScript Code */ 


/* From List value */
let value1;

 function selectedSubjectName1() {
    var subjectIdNode1 = document.getElementById('from');
    value1 =
    subjectIdNode1.options[subjectIdNode1.selectedIndex].text;
 }

 /* To List Value */
 let value2;

 function selectedSubjectName2() {
    var subjectIdNode2 = document.getElementById('to');
    value2 =
    subjectIdNode2.options[subjectIdNode2.selectedIndex].text;
 }

function convert(){
    if(value1 == "Decimal" && value2 == "Binary"){
        /*    Decimal To Binary ..... */

    var vl = document.querySelector('#input').value;
    document.querySelector('#textarea').innerHTML = ( vl>>>0 ).toString(2);

}else if(value1 == "Binary" && value2 == "Decimal"){
         /*  Binary To Decimal ...... */

    var vl = document.querySelector('#input').value;
    document.querySelector('#textarea').innerHTML = parseInt(vl, 2).toString(10);

}else if(value1 == "Binary" && value2 == "Octal"){
         /*  Binary To Octal ...... */

    var vl = document.querySelector('#input').value;
    document.querySelector('#textarea').innerHTML = parseInt(vl, 2).toString(8);
    
}else if(value1 == "Octal" && value2 == "Binary"){
        /*  Octal To Biary ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML =  parseInt(vl, 8).toString(2);

}else if(value1 == "Binary" && value2 == "Hexadecimal"){
          /*  Binary To Hexadecimal ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = parseInt(vl, 2).toString(16);;

}else if(value1 == "Hexadecimal" && value2 == "Binary"){
        /*   Hexadecimal To Binary ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = (parseInt(vl, 16)).toString(2); 

}else if(value1 == "Decimal" && value2 == "Octal"){
    /*   Decimal To Octal ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = parseInt(vl).toString(8);

}else if(value1 == "Octal" && value2 == "Decimal"){
    /*   Octal To Decimal ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = parseInt(vl,8);

}else if(value1 == "Decimal" && value2 == "Hexadecimal"){
    /*   Decimal To Hexadecimal ...... */
var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = parseInt(vl).toString(16);

}else if(value1 == "Hexadecimal" && value2 == "Decimal"){
    /*  Hexadecimal To Decimal ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML =parseInt(vl,16);

}else if(value1 == "Octal" && value2 == "Hexadecimal"){
    /*  Octal To Hexadecimal ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = parseInt(vl,8);

}else if(value1 == "Hexadecimal" && value2 == "Octal"){
    /* Hexadecimal To   Octal ...... */

var vl = document.querySelector('#input').value;
document.querySelector('#textarea').innerHTML = parseInt(vl,16);
}
}

/* Swap Button Coding ........ */

function swap(){
    if(value1 == "Decimal" && value2 == "Binary"){
        /*    Binary To Decimal and Decimal To Binary ..... */
        var to=document.getElementById("to");
        var from=document.getElementById("from");
        var temp;
        temp=to.value;
        to.value=from.value;
        from.value=temp;

        var textarea=document.getElementById("textarea");
        var input=document.getElementById("input");
        var temp;
        temp=textarea.value;
        textarea.value=input.value;
        input.value=temp;

}else if(value1 == "Binary" && value2 == "Octal"){
         /*  Octal To Binary and Binary To Octal ...... */

         var to=document.getElementById("to");
         var from=document.getElementById("from");
         var temp;
         temp=to.value;
         to.value=from.value;
         from.value=temp;
 
         var textarea=document.getElementById("textarea");
         var input=document.getElementById("input");
         var temp;
         temp=textarea.value;
         textarea.value=input.value;
         input.value=temp;
    
}else if(value1 == "Binary" && value2 == "Hexadecimal"){
          /*  Hexadecimal To Binary and Binary To Hexadecimal ...... */

          var to=document.getElementById("to");
          var from=document.getElementById("from");
          var temp;
          temp=to.value;
          to.value=from.value;
          from.value=temp;
  
          var textarea=document.getElementById("textarea");
          var input=document.getElementById("input");
          var temp;
          temp=textarea.value;
          textarea.value=input.value;
          input.value=temp;

}else if(value1 == "Decimal" && value2 == "Octal"){
    /*   Octal To Decimal and Decimal To Octal ...... */

    var to=document.getElementById("to");
    var from=document.getElementById("from");
    var temp;
    temp=to.value;
    to.value=from.value;
    from.value=temp;

    var textarea=document.getElementById("textarea");
    var input=document.getElementById("input");
    var temp;
    temp=textarea.value;
    textarea.value=input.value;
    input.value=temp;

}else if(value1 == "Decimal" && value2 == "Hexadecimal"){
    /*   Hexadecimal To Decimal and Decimal To Hexadecimal ...... */
    var to=document.getElementById("to");
    var from=document.getElementById("from");
    var temp;
    temp=to.value;
    to.value=from.value;
    from.value=temp;

    var textarea=document.getElementById("textarea");
    var input=document.getElementById("input");
    var temp;
    temp=textarea.value;
    textarea.value=input.value;
    input.value=temp;

}else if(value1 == "Octal" && value2 == "Hexadecimal"){
    /*  Hexadecimal To Octal and Octal To Hexadecimal ...... */

    var to=document.getElementById("to");
    var from=document.getElementById("from");
    var temp;
    temp=to.value;
    to.value=from.value;
    from.value=temp;

    var textarea=document.getElementById("textarea");
    var input=document.getElementById("input");
    var temp;
    temp=textarea.value;
    textarea.value=input.value;
    input.value=temp;

}
}


/*  Reset Button Coding ...... */

function Reset() {
    var listBox = document.getElementById("from");
    listBox.selectedIndex = 0;
    var listBox = document.getElementById("to");
    listBox.selectedIndex = 0;

    document.getElementById("textarea").value = " ";
    document.getElementById("input").value = " ";
}
