module.exports = function toReadable(number) {
    let strNum = number.toString();
    let len = strNum.length;
    let result = '';
    let i = 0;

    if(number === 0) return "zero";
    if((number % 100)>=10 && (number % 100)<20){
        switch (number % 100) {            
            case 10 : result = "ten"; break;
            case 11 : result = "eleven"; break;
            case 12 : result = "twelve"; break;
            case 13 : result = "thirteen"; break;
            case 14 : result = "fourteen"; break;
            case 15 : result = "fifteen"; break;
            case 16 : result = "sixteen"; break;
            case 17 : result = "seventeen"; break;
            case 18 : result = "eighteen"; break;
            case 19 : result = "nineteen"; 
        }
    }
    else {        
        switch (strNum[len-1]) {            
            case '1' : result = "one"; break;
            case '2' : result = "two"; break;
            case '3' : result = "three"; break;
            case '4' : result = "four"; break;
            case '5' : result = "five"; break;
            case '6' : result = "six"; break;
            case '7' : result = "seven"; break;
            case '8' : result = "eight"; break;
            case '9' : result = "nine"; 
        }
        if(number>19)
        switch (strNum[len-2]) {                        
            case '2' : result = "twenty " + result; break;
            case '3' : result = "thirty " + result; break;
            case '4' : result = "forty " + result; break;
            case '5' : result = "fifty " + result; break;
            case '6' : result = "sixty " + result; break;
            case '7' : result = "seventy " + result; break;
            case '8' : result = "eighty " + result; break;
            case '9' : result = "ninety " + result; 
        }
    }
    if(number > 99){
        result = "hundred " + result;
        switch (strNum[len-3]) {         
            case '1' : result = "one " + result; break;
            case '2' : result = "two " + result; break;
            case '3' : result = "three " + result; break;
            case '4' : result = "four " + result; break;
            case '5' : result = "five " + result; break;
            case '6' : result = "six " + result; break;
            case '7' : result = "seven " + result; break;
            case '8' : result = "eight " + result; break;
            case '9' : result = "nine " + result; 
        }
    }
    return result.trim();
};
