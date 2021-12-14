function isPalindrome() {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr; // Write your algorithm here
}
isPalindrome("race car")
/* 
  // if name = name ? return true 
  //else if name / name return false 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  the /[\W_]/g removes all non alphanumeric characters 
  strinf.lower.replace will make everythigng lower case 
  resevers string 
*/

// You can run `node index.js` to view these console logs
//if (require.main === module) {
  // add your own custom tests in here
//  console.log("Expecting: true");
  //console.log("=>", isPalindrome("racecar"));

  //console.log("");

  //console.log("Expecting: false");
  //console.log("=>", isPalindrome("robot"));
}

//module.exports = isPalindrome;
