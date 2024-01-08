/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let obj={}
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(obj[grid[i][j]]==undefined){
                obj[grid[i][j]]=1
            }else{
                obj[grid[i][j]]++
            }
        }
    }
    let a=0
    let arr=[]
   
    for(let key in obj){
        arr.push(+key)
        if(obj[key]==2){
            a=+key
        }
    }
     console.log(arr)
    let i=0;
    let b=0;
    while(i<arr.length-1){
        if((arr[i]+1)==arr[i+1]){
            i++
        }else{
            b=arr[i]+1;
            break;
        }
        
    }
    if(arr[0]==1){
        if(b==0 && arr.length>0){
        b=arr[arr.length-1]+1
    }
        
    }else{
        b=1
    }
    
    return [a,b]
    
};