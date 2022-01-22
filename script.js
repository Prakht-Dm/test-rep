function checkSign(sign){
  return (sign=='+' || sign=='*' || sign=='-'|| sign=='/' || sign=='**' || sign =='%') ? true : false;
}

function checkEmpty(des){
    return (des!=null && typeof(des)!='undefined') ? false : true;
}

function checkIsNumer(des){
    return (Boolean(+des) || des=="0") ? true : false;
}

function getAnswer(x,y,sign){
    switch (sign){
        case ('+') : return (+x+(+y));
        break; 
        case ('*') : return (x*y);
        break; 
        case ('-') : return (x-y);
        break; 
        case ('/') : return (y!=0) ? (x/y) : "false";
        // На 0 делить нельзя. Строка не пройдет проверку "на номер"
        break; 
        case ('**') : return (x**y);
        break; 
        case ('%') : return (y!=0) ? (x%y) : "false";
        // На 0 делить нельзя. Строка не пройдет проверку "на номер"
        break;                                         
    }
}

const x = prompt("Введите Х","");
const sign = prompt("Доступные операции: +, *, -, /, **, %.");
const y = prompt("Введите Y","");

if (checkEmpty(x) || checkEmpty(y) || checkEmpty(sign)){
    alert("error");
    } else if (!checkSign(sign)){
        alert("unknown operation");
        } else if (checkIsNumer(x) && checkIsNumer(y) && checkIsNumer(getAnswer(x,y,sign))){
            alert(`${x+sign+y}=${getAnswer(x,y,sign)}`);
            } else{
                alert("error");
    }