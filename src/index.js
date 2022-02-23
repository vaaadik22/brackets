module.exports = function check(str, bracketsConfig) {
  
  let stack = [];
  let brackets = [];
  let pairsOfBrackets = new Object();
  for (let i = 0; i < bracketsConfig.length; i++) {
      pairsOfBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
      brackets.push(bracketsConfig[i][0]);
  }
  for (let i = 0; i < str.length; i++) {
  if (brackets.includes(str[i])) {
  if (pairsOfBrackets[str[i]] === str[i]) {
  if (stack.length !== 0 && stack[stack.length - 1] === str[i]) {
      stack.pop() 
  } else { stack.push(str[i]) 
    }
  }
  else {stack.push(str[i]) 
    }
  }
  else {
  if (stack.length === 0) { 
      return false 
  }

  if (pairsOfBrackets[str[i]] === stack[stack.length - 1]) { 
      stack.pop() 
  }

  else { 
      return false 
      }
    }
  }
  return stack.length === 0;
}