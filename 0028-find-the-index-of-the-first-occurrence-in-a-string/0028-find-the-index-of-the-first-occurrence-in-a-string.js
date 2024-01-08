/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;i<haystack.length;i++){
        let nStr="";
        for(let j=0;j<needle.length;j++){
            nStr+=haystack[i+j]
        }
        if(nStr==needle){
            return i
        }
    }
    return -1
};