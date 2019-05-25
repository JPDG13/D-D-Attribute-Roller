var str, dex, con, int, wis, cha;
let myAttributes = [str, dex, con, int, wis, cha];
 
 
// Standard stat roll of 3d6
function statRoll () {
 
    var roll_0, roll_1, roll_2, attribute;
 
    roll_0 = Math.floor((Math.random() * 6) + 1);
    roll_1 = Math.floor((Math.random() * 6) + 1);
    roll_2 = Math.floor((Math.random() * 6) + 1);
 
    attribute = roll_0 + roll_1 + roll_2;
    console.log(attribute);
 
    };
 
// myAttributes.forEach(statRoll);
 
statRoll(str);
statRoll(dex);
statRoll(con);
statRoll(int);
statRoll(wis);
statRoll(cha);
console.log("---------------");
 
// Rolling 3d6, no ones
function statRollIgnoreOnes () {
 
    var roll_0, roll_1, roll_2, attribute;
 
    roll_0 = Math.floor((Math.random() * 5) + 2);
    roll_1 = Math.floor((Math.random() * 5) + 2);
    roll_2 = Math.floor((Math.random() * 5) + 2);
 
    attribute = roll_0 + roll_1 + roll_2;
    console.log(attribute);
 
    };
 
// myAttributes.forEach(statRoll);
 
statRollIgnoreOnes (str);
statRollIgnoreOnes (dex);
statRollIgnoreOnes (con);
statRollIgnoreOnes (int);
statRollIgnoreOnes (wis);
statRollIgnoreOnes (cha);
console.log("---------------");