function telephoneCheck(str) {
  let regExp = /(^\d\d\d[-]\d\d\d[-]\d\d\d\d)/;
  let regExp2 = /^[(]\d\d\d[)]\d\d\d[-]\d\d\d\d/;
  let regExp3 = /^[(]\d\d\d[)]\s\d\d\d[-]\d\d\d\d/;
  let regExp4 = /^\d\d\d\s\d\d\d\s\d\d\d\d/;
  let regExp5 = /^5\d\d\d\d\d\d\d\d\d/;
  let regExp6 = /^\d\s\d\d\d\s\d\d\d\s\d\d\d\d/;
  let regExp7 = /^1\s[(]\d\d\d[)]\s\d\d\d[-]\d\d\d\d/;
  let regExp8 = /^1\s\d\d\d[-]\d\d\d[-]\d\d\d\d/;
  let regExp9 = /^1[(]\d\d\d[)]\d\d\d[-]\d\d\d\d/;
  //Array of regex.
  const newArr = [
    regExp,
    regExp2,
    regExp3,
    regExp4,
    regExp5,
    regExp6,
    regExp7,
    regExp8,
    regExp9,
  ];
  let myBool = false;
  //validate phone number string with regex.test method
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].test(str)) {
      myBool = true;
    }
  }
  return myBool;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("27576227382"));
