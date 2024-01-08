/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str=""
    for(let i=0;i<s.length;i++){
        if(s[i]=="a" || s[i]=="A" || s[i]=="b" || s[i]=="B" || s[i]=="c" || s[i]=="C" || s[i]=="d" || s[i]=="D" || s[i]=="e" || s[i]=="E" || s[i]=="f" || s[i]=="F" || s[i]=="g" || s[i]=="G" || s[i]=="h" || s[i]=="H" || s[i]=="i" || s[i]=="I" || s[i]=="j" || s[i]=="J" || s[i]=="k" || s[i]=="K" || s[i]=="l" || s[i]=="L" || s[i]=="m" || s[i]=="M" || s[i]=="n" || s[i]=="N" || s[i]=="o" || s[i]=="O" || s[i]=="p" || s[i]=="P" || s[i]=="q" || s[i]=="Q" || s[i]=="r" || s[i]=="R" || s[i]=="s" || s[i]=="S" || s[i]=="t" || s[i]=="T" || s[i]=="u" || s[i]=="U" || s[i]=="v" || s[i]=="V" || s[i]=="w" || s[i]=="W" || s[i]=="x" || s[i]=="X" || s[i]=="y" || s[i]=="Y" || s[i]=="z" || s[i]=="Z" || s[i]=="0" || s[i]=="1" || s[i]=="2" || s[i]=="3" || s[i]=="4" || s[i]=="5" || s[i]=="6" || s[i]=="7" || s[i]=="8" || s[i]=="9"){
            str+=s[i]
        }
    }
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    if(rev.toLowerCase()==str.toLowerCase()){
        return true
    }else{
        return false
    }
    
};