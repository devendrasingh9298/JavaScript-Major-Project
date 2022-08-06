
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
