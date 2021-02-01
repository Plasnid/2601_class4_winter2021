// * "" '' ``
// * `string literals use ${otherData}`;
const animalName = "Elephant";
let favouriteAnimal = `My favourite animal ${animalName}`;
//* number
let animalAge = 100;
//* boolean
let aliveAnimal = true;
let sockTheme = "instrument";

//* arrays
let stuSocks = ["ukulele","elephant","vaccuum","rainbow","butterfly","apple","sun","fish"];
/**
console.log("I have a lot of socks!");
console.log(stuSocks);
console.log(stuSocks[3]);
console.log(`My favourite ${sockTheme} socks are ${stuSocks[0]} socks`);
*/
/**
 * * = assigns a value eg.  let bob = "duuuude!";
 * * == compares 2 values if(theme=="weather"){do action here}
 * * === checks the values and the data type
 */
let firstNum = 1;
if(firstNum==="1"){
    console.log("it's a 1");
}else{
    console.log("not a 1");
}

function favouriteLogger(theme, sockType){
    console.log(`My favourite ${theme} socks are ${sockType} socks`);
    // * if statement checking if the theme is weather
    if(theme=="Weather"){
        console.log("Ooooh yeah baby!  Weather is the best!!! WOOOOOOOOOOOOO!");
    }else if(theme=="Creature"){
        console.log("Yeeah, creatures are cool I guess");
    }else{
        console.log("not the best theme");
    }
};
favouriteLogger("Creature", stuSocks[4]);
favouriteLogger("Weather", stuSocks[3]);
favouriteLogger("Fruit", stuSocks[5]);

