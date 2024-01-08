/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
  let arr=[]
  nums.sort((a,b)=>b-a)
  let k=(nums.length/2)
  for(let i=0;i<k;i++){
      let AliceMin=nums.pop()
      let BobMin=nums.pop()
       arr.push(BobMin)
      arr.push(AliceMin)
     
  }
    return arr
};