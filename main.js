var str, dex, con, int, wis, cha;
let myAttributes = [str, dex, con, int, wis, cha];


// Standard stat roll of 3d6
function statRoll () {
 
    var roll_0, roll_1, roll_2, attribute;
 
    roll_0 = Math.floor((Math.random() * 6) + 1);
    roll_1 = Math.floor((Math.random() * 6) + 1);
    roll_2 = Math.floor((Math.random() * 6) + 1);
 
    attribute = roll_0 + roll_1 + roll_2;
    return attribute;
 
    };
 
// myAttributes.forEach(statRoll);
 
statRoll(str);
statRoll(dex);
statRoll(con);
statRoll(int);
statRoll(wis);
statRoll(cha);
console.log("---------------");

function displayRoll () {
    document.getElementById("str-roll").innerHTML = statRoll(str);
    document.getElementById("dex-roll").innerHTML = statRoll(dex);
    document.getElementById("con-roll").innerHTML = statRoll(con);
    document.getElementById("int-roll").innerHTML = statRoll(int);
    document.getElementById("wis-roll").innerHTML = statRoll(wis);
    document.getElementById("cha-roll").innerHTML = statRoll(cha);
}

displayRoll();
 
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


 
// Generic Racial Traits

var strPlusOne = ' Your Strength score increases by 1.';
var strPlusTwo = ' Your Strength score increases by 2.';
var dexPlusOne = ' Your Dexterity score increases by 1.';
var dexPlusTwo = ' Your Dexterity score increases by 2.';
var conPlusOne = ' Your Constitution score increases by 1.';
var conPlusTwo = ' Your Constitution score increases by 2.';
var intPlusOne = ' Your Intelligence score increases by 1';
var intPlusTwo = ' Your Intelligence score increases by 2';
var wisPlusOne = ' Your Wisdom score increases by 1';
var wisPlusTwo = ' Your Wisdom score increases by 2';
var chaPlusOne = ' Your Charisma score increases by 1';
var chaPlusTwo = ' Your Charisma score increases by 2';

var speed30 = ' Your base walking speed is 30 feet.';
var speed25 = ' Your base walking speed is 25 feet.';

// Dragonborn Racial Traits
var dragonbornAge;
var dragonbornAlignment;
var dragonbornSize;
var dragonbornLanguages;
var dragonbornFeatures;

// Dwarf Racial Traits
var dwarfAge = 'Dwarves mature at the same rate as humans, but they\'re considered young until they reach the age of 50. On average, they live about 350 years.'

var dwarfAlignment = ' Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.'

var dwarfSize = ' Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.'

var dwarfSpeed = ' Your speed is not reduced by wearing heavy armor.';

var dwarfLanguages = ' You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.';

var dwarfFeatures = '<li>DARKVISION: Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.</li><br><li>DWARVEN RESILIENCE: You have advantage on saving throws against poison, and you have resistance against poison damage.</li><br><li>DWARVEN COMBAT TRAINING: You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</li><br><li>TOOL PROFICIENCY: You gain proficiency with the artisan\'s tools of your choice: smith\'s tools, brewer\'s supplies, or mason\'s tools.</li><br><li>STONECUNNING: Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</li>';

//Elf Racial Traits
var elfAge = ' Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.';

var elfAlignment = ' Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.';

var elfSize = ' Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.';

var elfLanguages = ' You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.';

var elfFeatures = '<li>DARKVISION: Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray</li><br><li>KEEN SENSES: You have proficiency in the Perception skill.</li><br><li>FEY ANCESTRY: You have advantage on saving throws against being charmed, and magic can\'t put you to sleep. </li><br><li>TRANCE: Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</li>';

// Gnome Racial Traits
var gnomeAge;
var gnomeAlignment;
var gnomeSize;
var gnomeLanguages;
var gnomeFeatures;

// Halfling Racial Traits
var halflingAge;
var halflingAlignment;
var halflingSize;
var halflingLanguages;
var halflingFeatures;

// Half Elf Racial Traits
var halfElfAge;
var halfElfAlignment;
var halfElfsize;
var halfElfLanguages;
var halfElfFeatures;

// Half-Orc Racial Traits

var halfOrcAge;
var halfOrcAlignment;
var halfOrcSize;
var halfOrcLanguages;
var halfOrcFeatures;

// Human Racial Traits
var humanAge;
var humanAlignment;
var humanSize;
var humanLanguages;
var humanFeatures;

// Tiefling Racial Traits
var tieflingAge;
var tieflingAlignment;
var tieflingSize;
var tieflingLanguages;
var tieflingFeatures;
        
 
function raceSubrace () { 
    
    var race = document.getElementById('choose-race');
    var subrace = document.getElementById('subrace');
    var listRace = race.options[race.selectedIndex].value;
    
    // Race Dropdown Box
    race.options[0] = new Option('--Select--');
    race.options[1] = new Option('Dragonborn');
    race.options[2] = new Option('Dwarf');
    race.options[3] = new Option('Elf');
    race.options[4] = new Option('Gnome');
    race.options[5] = new Option('Halfling');
    race.options[6] = new Option('Half-Elf');
    race.options[7] = new Option('Half-Orc');
    race.options[8] = new Option('Human');
    race.options[9] = new Option('Tiefling');
    
    if (listRace === 'Human') {
        subrace.options.length=0;
        subrace.options[0] = new Option('Human Non-Variant');
        subrace.options[1] = new Option('Human Variant');
        
    } else if (listRace === 'Elf') {
        subrace.options.length=0;
        subrace.options[0] = new Option('High Elf');
        subrace.options[1] = new Option('Moon Elf');
        subrace.options[2] = new Option('Drow');
        
        document.getElementById("dex-bonus").innerHTML = 2;
        document.getElementById("features").innerHTML += elfFeatures;
        document.getElementById("score-increase").textContent += dexPlusTwo;
        document.getElementById("age").textContent += elfAge;
        document.getElementById("alignment").textContent += elfAlignment;
        document.getElementById("size").textContent += elfSize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += elfLanguages;
       
    } else if (listRace === 'Dwarf') {
        subrace.options.length=0;
        subrace.options[0] = new Option('Hill Dwarf');
        subrace.options[1] = new Option('Mountain Dwarf');
        subrace.options[2] = new Option('Duergar');
        
        document.getElementById("con-bonus").innerHTML = 2;
        document.getElementById("score-increase").textContent += conPlusTwo;
        document.getElementById("features").innerHTML += dwarfFeatures;
        document.getElementById("age").textContent += dwarfAge;
        document.getElementById("alignment").textContent += dwarfAlignment;
        document.getElementById("size").textContent += dwarfSize;
        document.getElementById("speed").textContent += speed25 + dwarfSpeed;
        document.getElementById("languages").textContent += dwarfLanguages;
       
    } 
    
}

raceSubrace(); 


