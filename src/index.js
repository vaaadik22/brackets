module.exports = function check(str, bracketsConfig) {
  
  let stack = [];
  bracketsConfig.forEach(bracket => {
    stack.push(bracket.(''));
  })
  
let i = 0;
while(i < stack.length){
  if(str.includes(stack[i])){
    str.str.replace(stack[i], '');
    i = 0;
  } else{
    i++
  }
}
return str.length === 0;
}
