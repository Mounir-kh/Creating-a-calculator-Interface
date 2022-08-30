var i=0;
var head=document.getElementById('sentence');
var text="This is a simple calculation project";

/*The Title caracteristics*/
function typing(){
if (i<text.length){
    head.innerHTML+=text.charAt(i);
   
    if (i==7){head.innerHTML+="<br>"};
    if(i==16){head.innerHTML+="<br>"};
    
    i++;
    setTimeout(typing, 50);
}
}
typing();

/* Input fonction accepting only numbers*/
function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : event.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }



