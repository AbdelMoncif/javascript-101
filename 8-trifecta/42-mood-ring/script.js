// Mood Ring 💍
// Codédex



let stone = document.getElementById("stone");
let randomNumber = Math.floor(Math.random() * 10);
const colorDict = {1:"red",2:"orange",3:"yellow",4:"green",5:"blue",6:"#4169e1",7:"#00008b", 8:"purple", 9:"black"};


stone.style.backgroundColor = colorDict[randomNumber];
