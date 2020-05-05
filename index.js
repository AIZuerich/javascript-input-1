'utf-8'
let fs = require('fs');
var word = fs.readFileSync("test.json", "utf8");

var words = JSON.parse(word);

console.log(words);
var i = 0

while (i < 10){
  var x = prompt("French");
  var y = prompt("English");
  words.list.push({
    french : y,
    english : x
  });

  
  i++;
  
  console.log(words); 


}

fs.writeFileSync('test.json',JSON.stringify(words));




