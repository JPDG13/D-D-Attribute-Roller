var str, dex, con, int, wis, cha;
let myAttributes = [str, dex, con, int, wis, cha];

str = 0;
dex = 0;
con = 0;
int = 0;
wis = 0;
cha = 0;

var racialStr = 0;
var racialDex = 0;
var racialCon = 0;
var racialInt = 0;
var racialWis = 0;
var racialCha = 0;

document.getElementById("str-roll").innerHTML = '--'
document.getElementById("dex-roll").innerHTML = '--'
document.getElementById("con-roll").innerHTML = '--'
document.getElementById("int-roll").innerHTML = '--'
document.getElementById("wis-roll").innerHTML = '--'
document.getElementById("cha-roll").innerHTML = '--'

function clearTotals() {
    
    racialStr = 0;
    racialDex = 0;
    racialCon = 0;
    racialInt = 0;
    racialWis = 0;
    racialCha = 0;
}

function clearFeatures (){
    
    document.getElementById("str-bonus").innerHTML = '';
    document.getElementById("dex-bonus").innerHTML = '';
    document.getElementById("con-bonus").innerHTML = '';
    document.getElementById("int-bonus").innerHTML = '';
    document.getElementById("wis-bonus").innerHTML = '';
    document.getElementById("cha-bonus").innerHTML = '';
    document.getElementById("score-increase").textContent = 'ABILITY SCORE INCREASE: ';
    document.getElementById("age").textContent = 'AGE: ';
    document.getElementById("alignment").textContent = 'ALIGNMENT: ';
    document.getElementById("size").textContent = 'SIZE: ';
    document.getElementById("speed").textContent = 'SPEED: ';
    document.getElementById("languages").textContent = 'LANGUAGES: ';
    document.getElementById("features").textContent = ''; // TODO, ADD TABLE
}

// Click to roll stats, no 1's.  
document.getElementById("3d6-no-ones").addEventListener("click", function() {

    str = statRollIgnoreOnes (str);
    dex = statRollIgnoreOnes (dex);
    con = statRollIgnoreOnes (con);
    int = statRollIgnoreOnes (int);
    wis = statRollIgnoreOnes (wis);
    cha = statRollIgnoreOnes (cha); 
    
    initialRoll();
});

function statRollIgnoreOnes () {
    
    var roll_0, roll_1, roll_2, attribute;
 
    roll_0 = Math.floor((Math.random() * 5) + 2);
    roll_1 = Math.floor((Math.random() * 5) + 2);
    roll_2 = Math.floor((Math.random() * 5) + 2);
 
    attribute = roll_0 + roll_1 + roll_2;
    return attribute;
 };  

// Click for stat Roll of 3d6 straight
document.getElementById("3d6-only").addEventListener("click", function() {
    
    str = statRoll(str);
    dex = statRoll(dex);
    con = statRoll(con);
    int = statRoll(int);
    wis = statRoll(wis);
    cha = statRoll(cha);
    
    initialRoll();
});

function statRoll () {
 
    var roll_0, roll_1, roll_2, attribute;
 
    roll_0 = Math.floor((Math.random() * 6) + 1);
    roll_1 = Math.floor((Math.random() * 6) + 1);
    roll_2 = Math.floor((Math.random() * 6) + 1);
 
    attribute = roll_0 + roll_1 + roll_2;
    return attribute;
    };


// Displays HTML input fields in place of the dice rolls. 
document.getElementById("point-buy-button").addEventListener("click", function() {
    
    document.getElementById("str-roll").innerHTML =' <input class="point-buy-input" id="str-input" type="number" min="8" max="15" value="8" onchange="totalPointBuy()"/>';
    document.getElementById("dex-roll").innerHTML =' <input class="point-buy-input" id="dex-input" type="number" min="8" max="15" value="8" onchange="totalPointBuy()"/>';
    document.getElementById("con-roll").innerHTML =' <input class="point-buy-input" id="con-input" type="number" min="8" max="15" value="8" onchange="totalPointBuy()"/>';
    document.getElementById("int-roll").innerHTML =' <input class="point-buy-input" id="int-input" type="number" min="8" max="15" value="8" onchange="totalPointBuy()"/>';
    document.getElementById("wis-roll").innerHTML =' <input class="point-buy-input" id="wis-input" type="number" min="8" max="15" value="8" onchange="totalPointBuy()"/>';
    document.getElementById("cha-roll").innerHTML =' <input class="point-buy-input" id="cha-input" type="number" min="8" max="15" value="8" onchange="totalPointBuy()"/>';
    
    totalPointBuy();


});

function totalPointBuy () {
    
    str =  parseInt((document.getElementById("str-input").value));
    dex =  parseInt((document.getElementById("dex-input").value));
    con =  parseInt((document.getElementById("con-input").value));
    int =  parseInt((document.getElementById("int-input").value));
    wis =  parseInt((document.getElementById("wis-input").value));
    cha =  parseInt((document.getElementById("cha-input").value));
    
    totalRoll();
    
    /* Point-Buy Addition
    8 = 0
    9 = 1
    10 = 2
    11 = 3
    12 = 4
    13 = 5
    14 = 7
    15 = 9
    */
    
}

// Displays initial rolls in HTML
function initialRoll () {
    
    document.getElementById("str-roll").innerHTML = str;
    document.getElementById("dex-roll").innerHTML = dex;
    document.getElementById("con-roll").innerHTML = con;
    document.getElementById("int-roll").innerHTML = int;
    document.getElementById("wis-roll").innerHTML = wis;
    document.getElementById("cha-roll").innerHTML = cha;
    
    totalRoll();
}

function totalRoll() {
    
    document.getElementById("str-total").innerHTML = str + racialStr;
    document.getElementById("dex-total").innerHTML = dex + racialDex;
    document.getElementById("con-total").innerHTML = con + racialCon;
    document.getElementById("int-total").innerHTML = int + racialInt;
    document.getElementById("wis-total").innerHTML = wis + racialWis;
    document.getElementById("cha-total").innerHTML = cha + racialCha;
    
};

// Generic Racial Traits
var strPlusOne = ' Your Strength score increases by 1. ';
var strPlusTwo = ' Your Strength score increases by 2. ';
var dexPlusOne = ' Your Dexterity score increases by 1. ';
var dexPlusTwo = ' Your Dexterity score increases by 2. ';
var conPlusOne = ' Your Constitution score increases by 1. ';
var conPlusTwo = ' Your Constitution score increases by 2. ';
var intPlusOne = ' Your Intelligence score increases by 1. ';
var intPlusTwo = ' Your Intelligence score increases by 2. ';
var wisPlusOne = ' Your Wisdom score increases by 1. ';
var wisPlusTwo = ' Your Wisdom score increases by 2. ';
var chaPlusOne = ' Your Charisma score increases by 1. ';
var chaPlusTwo = ' Your Charisma score increases by 2. ';

var speed25 = ' Your base walking speed is 25 feet.';
var speed30 = ' Your base walking speed is 30 feet.';
var darkVision = ' You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'

// Dragonborn Racial Traits
var dragonbornAge = ' Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.';
var dragonbornAlignment = ' Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.';
var dragonbornSize = ' Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.';
var dragonbornLanguages = ' You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.';

var dragonbornTable = ' <table id="dragon"><tr><th> &nbsp;Draconic Ancestry &nbsp;</th><th> &nbsp;Damage Type &nbsp;</th><th> &nbsp;Breath Weapon &nbsp;</th><th> &nbsp; Save &nbsp; </th></tr><tr><td>Black</td><td>Acid</td><td>5 x 30 ft. line</td><td>Dex</td></tr><tr><td>Blue</td> <td>Lightning</td><td>5 x 30 ft. line</td><td>Dex</td></tr><tr><td>Brass</td><td>Fire</td><td>5 x 30 ft. line</td><td>Dex</td></tr><tr><td>Bronze</td><td>Lightning</td><td>5 x 30 ft. line</td>     <td>Dex</td></tr><tr><td>Copper</td><td>Acid</td><td>5 x 30 ft. line</td><td>Dex</td></tr><tr>    <td>Gold</td><td>Fire</td><td>15 ft. cone</td><td>Dex</td></tr><tr><td>Green</td><td>Poison</td>     <td>15 ft. cone</td><td>Con</td></tr><tr><td>Red</td><td>Fire</td><td>15 ft. cone</td><td>Dex</td>    </tr><tr> <td>Silver</td><td>Cold</td><td>15 ft. cone</td><td>Con</td></tr><tr><td>White</td><td>Cold</td><td>15 ft. cone</td><td>Con</td></tr></table><br>';
 
var dragonbornFeatures = ' <li>DRACONIC ANCESTRY: You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.</li><br><li>BREATH WEAPON: You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. After you use your breath weapon, you can’t use it again until you complete a short or long rest.<br><br>When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. </li><br>' + dragonbornTable + '<li>DAMAGE RESISTANCE: You have resistance to the damage type associated with your draconic ancestry.</li><br>';

// Dwarf Racial Traits
var dwarfAge = ' Dwarves mature at the same rate as humans, but they\'re considered young until they reach the age of 50. On average, they live about 350 years.'

var dwarfAlignment = ' Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.'

var dwarfSize = ' Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.'

var dwarfSpeed = ' Your speed is not reduced by wearing heavy armor.';

var dwarfLanguages = ' You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.';

var hillDwarfFeatures = ' <br><li>DWARVEN TOUGHNESS: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.</i>' //TODO FIX this

var dwarfFeatures = '<li>DARKVISION: Accustomed to life underground, you have superior vision in dark and dim conditions. ' + darkVision + '</li><br><li>DWARVEN RESILIENCE: You have advantage on saving throws against poison, and you have resistance against poison damage.</li><br><li>DWARVEN COMBAT TRAINING: You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</li><br><li>TOOL PROFICIENCY: You gain proficiency with the artisan\'s tools of your choice: smith\'s tools, brewer\'s supplies, or mason\'s tools.</li><br><li>STONECUNNING: Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus. </li>' + hillDwarfFeatures;

//Elf Racial Traits
var elfAge = ' Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.';

var elfAlignment = ' Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.';

var elfSize = ' Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.';

var elfLanguages = ' You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.';

var elfFeatures = '<li>DARKVISION: Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. ' + darkVision + '</li><br><li>KEEN SENSES: You have proficiency in the Perception skill.</li><br><li>FEY ANCESTRY: You have advantage on saving throws against being charmed, and magic can\'t put you to sleep. </li><br><li>TRANCE: Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</li>'

var highElfFeatures = '<br><li>ELF WEAPON TRAINING: You have proficiency with the longsword, shortsword, shortbow, and longbow.</li><br><li>CANTRIIP: You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.</li><br><li>EXTRA LANGUAGE: You can speak, read, and write one extra language of your choice.</li>';

// Gnome Racial Traits
var gnomeAge = ' Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.';
var gnomeAlignment = ' Gnomes are most often good. Those who lend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who lend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.';
var gnomeSize = ' Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.';
var gnomeLanguages = ' You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.';
var gnomeFeatures = '<li>DARKVISION: Accustomed to life underground, you have superior vision in dark and dim conditions. ' + darkVision + '</li><br><li>GNOME CUNNING: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.</li><br><li>ARTIFICER\'S LORE: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.</li><br><li>TINKER: You have proficiency with artisan\’s tools (tinker\’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: <ol><br><li>Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.</li><br><li>Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.</li><br><li>Music Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song\’s end or when it is closed.</li></ol>';

// Halfling Racial Traits
var halflingAge = ' A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.';
var halflingAlignment = ' Alignment: Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways. ';
var halflingSize = ' Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.';
var halflingLanguages = ' You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.';
var halflingFeatures ='<li>LUCKY: When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll. </li><br><li>BRAVE: You have advantage on saving throws against being frightened.</li><br><li>HALFLING NIMBLENESS: You can move through the space of any creature that is of a size larger than yours.</li><br><li>NATURALLY STEALTHY: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.</li>';

// Half-Elf Racial Traits
var halfElfAbilityScore = ' Two other ability scores of your choice increase by 1.';
var halfElfAge = ' Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.';
var halfElfAlignment = ' Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.';
var halfElfsize = ' Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.';
var halfElfLanguages = ' You can speak, read, and write Common, Elvish, and one extra language of your choice.';
var halfElfFeatures = ' <li>DARKVISION: Thanks to your elf blood, you have superior vision in dark and dim conditions. ' + darkVision + ' </li><br><li>FEY ANCESTRY: You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</li><br><li>SKILL VERSATILITY: You gain proficiency in two skills of your choice.</li>';

// Half-Orc Racial Traits
var halfOrcAge = ' Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.';
var halfOrcAlignment = ' Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.';
var halfOrcSize = ' Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.';
var halfOrcLanguages = ' You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.';
var halfOrcFeatures = ' <li>DARKVISION: Thanks to your orc blood, you have superior vision in dark and dim conditions. ' + darkVision + ' </li><br><li>MENACING: You gain proficiency in the Intimidation skill.</li><br><li>RELENTLESS ENDURANCE: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.</li><br><li>SAVAGE ATTACKS:  When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.</li>';

// Human Racial Traits
var humanAbilityScore = ' Your ability scores each increase by 1.'
var humanAge = ' Humans reach adulthood in their late teens and live less than a century. ';
var humanAlignment = ' Humans tend toward no particular alignment. The best and the worst are found among them.';
var humanSize = ' Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.';
var humanLanguages = ' You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.';

var humanFeatures = 'FEATURES: None.'; 
//TODO Add Human Variant Features, including attribut adjustments
//Ability Score Increase: Two different ability scores of your choice increase by 1.
//Skills: You gain proficiency in one skill of your choice.
//Feat: You gain one feat of your choice.

// Tiefling Racial Traits
var tieflingAge= ' Tieflings mature at the same rate as humans but live a few years longer.';
var tieflingAlignment =' Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.';
var tieflingSize = ' Tieflings are about the same size and build as humans. Your size is Medium.';
var tieflingLanguages = ' You can speak, read, and write Common and Infernal.';
var tieflingFeatures= '<li>DARKVISION: Thanks to your infernal heritage, you have superior vision in dark and dim conditions. ' + darkVision + '</li><br><li>HELLISH RESISTANCE: You have resistance to fire damage.</li><br><li>INFERNAL LEGACY: You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.</li>';

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
    
    if (listRace === 'Dragonborn') {
        
        clearTotals();
        
        racialCha = 1;
        racialStr = 2;
        totalRoll();      
        
        subrace.options.length=0; //TODO deal with blank subrace
        subrace.options[0] = new Option('Dragonborn');
        
        clearFeatures();
        
        document.getElementById("str-bonus").innerHTML = 2;
        document.getElementById("cha-bonus").innerHTML = 1;
        document.getElementById("score-increase").textContent += strPlusTwo + ' ' + chaPlusOne;
        document.getElementById("age").textContent += dragonbornAge;
        document.getElementById("alignment").textContent += dragonbornAlignment;
        document.getElementById("size").textContent += dragonbornSize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += dragonbornLanguages;               document.getElementById("features").innerHTML += dragonbornFeatures; // TODO, ADD TABLE
  
    } else if (listRace === 'Dwarf') {
        
        clearTotals();
        
        racialCon = 2;
        racialWis = 1;
        totalRoll();
             
        subrace.options.length=0;
        subrace.options[0] = new Option('Hill Dwarf');
    
        clearFeatures();
       
        document.getElementById("con-bonus").innerHTML = 2;
        document.getElementById("wis-bonus").innerHTML = 1;
        document.getElementById("score-increase").textContent += conPlusTwo + ' ' + wisPlusOne;
        document.getElementById("age").textContent += dwarfAge;
        document.getElementById("alignment").textContent += dwarfAlignment;
        document.getElementById("size").textContent += dwarfSize;
        document.getElementById("speed").textContent += speed25 + dwarfSpeed;
        document.getElementById("languages").textContent += dwarfLanguages;
        document.getElementById("features").innerHTML += dwarfFeatures;
       
    } else if (listRace === 'Elf') {
        
        clearTotals();    
        
        racialDex = 2;
        racialInt = 1;
        totalRoll();
        
        subrace.options.length=0;
        subrace.options[0] = new Option('High Elf');
        //subrace.options[1] = new Option('Wood Elf');
        //subrace.options[2] = new Option('Drow');
        //subrace.options[3] = new Option('Eladrin');
        //subrace.options[4] = new Option('Shadar-Kai sp?');
        
        clearFeatures();
        
        document.getElementById("dex-bonus").innerHTML = 2;
        document.getElementById("int-bonus").innerHTML = 1;
        document.getElementById("score-increase").textContent += dexPlusTwo + ' ' + intPlusOne;
        document.getElementById("age").textContent += elfAge;
        document.getElementById("alignment").textContent += elfAlignment;
        document.getElementById("size").textContent += elfSize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += elfLanguages;
        document.getElementById("features").innerHTML += elfFeatures;

       
    } else if (listRace === 'Gnome') {
        
        clearTotals();
        
        racialCon = 1;
        racialInt = 2;
        totalRoll();
                
        subrace.options.length=0;
        subrace.options[0] = new Option('Rock Gnome');
        //subrace.options[1] = new Option('Forest Gnome');
        //subrace.options[2] = new Option('Deep Gnome');
        clearFeatures();
        
        document.getElementById("int-bonus").innerHTML = 2;
        document.getElementById("con-bonus").innerHTML = 1;
        document.getElementById("score-increase").textContent += intPlusTwo + ' ' + conPlusOne;
        document.getElementById("age").textContent += gnomeAge;
        document.getElementById("alignment").textContent += gnomeAlignment;
        document.getElementById("size").textContent += gnomeSize;
        document.getElementById("speed").textContent += speed25;
        document.getElementById("languages").textContent += gnomeLanguages;
        document.getElementById("features").innerHTML += gnomeFeatures;

    
    } else if (listRace === 'Halfling') {
        
        clearTotals();
        
        racialDex =  2;
        racialCha = 1;
        totalRoll();
        
        subrace.options.length=0;
        subrace.options[0] = new Option('Lightfoot Halfling');
        //subrace.options[1] = new Option('Strongheart Halfling');
        //subrace.options[2] = new Option('Ghostwise Halfling');
        clearFeatures();
        
        document.getElementById("dex-bonus").innerHTML = 2;
        document.getElementById("cha-bonus").innerHTML = 1;
        document.getElementById("score-increase").textContent += dexPlusTwo + ' ' + chaPlusOne;
        document.getElementById("age").textContent += halflingAge;
        document.getElementById("alignment").textContent += halflingAlignment;
        document.getElementById("size").textContent += halflingSize;
        document.getElementById("speed").textContent += speed25;
        document.getElementById("languages").textContent += halflingLanguages;
        document.getElementById("features").innerHTML += halflingFeatures;

    } else if (listRace === 'Half-Elf') {
        
        clearTotals()
        
        racialCha = 2;
        totalRoll();
        
        subrace.options.length=0;
        subrace.options[0] = new Option('Half-Elf');
        
        clearFeatures();
        
        document.getElementById("cha-bonus").innerHTML = 2; //TODO, Two attributes +1
        document.getElementById("score-increase").textContent += chaPlusTwo + halfElfAbilityScore;
        document.getElementById("age").textContent += halfElfAge;
        document.getElementById("alignment").textContent += halfElfAlignment;
        document.getElementById("size").textContent += halfElfsize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += halfElfLanguages;
        document.getElementById("features").innerHTML += halfElfFeatures;

        
    } else if (listRace === 'Half-Orc') {
        
        clearTotals();
        
        racialStr = 2;
        racialCon = 1;
        totalRoll();
        
        subrace.options.length=0;
        subrace.options[0] = new Option('Half-Orc');
        
        clearFeatures();
        
        document.getElementById("str-bonus").innerHTML = 2;
        document.getElementById("con-bonus").innerHTML = 1;
        document.getElementById("score-increase").textContent += strPlusTwo + ' ' + conPlusOne;
        document.getElementById("age").textContent += halfOrcAge;
        document.getElementById("alignment").textContent += halfOrcAlignment;
        document.getElementById("size").textContent += halfOrcSize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += halfOrcLanguages;
        document.getElementById("features").innerHTML += halfOrcFeatures;

        
    } else if (listRace === 'Human') {
        
        clearTotals();
        
        racialStr = 1;
        racialDex = 1;
        racialCon = 1;
        racialInt = 1;
        racialWis = 1;
        racialCha = 1;
        totalRoll();
        
        subrace.options.length=0;
        subrace.options[0] = new Option('Human');
        subrace.options[1] = new Option('Human Variant');
        
        clearFeatures();
        
        document.getElementById("str-bonus").innerHTML = 1;
        document.getElementById("con-bonus").innerHTML = 1;
        document.getElementById("dex-bonus").innerHTML = 1;
        document.getElementById("int-bonus").innerHTML = 1;
        document.getElementById("wis-bonus").innerHTML = 1;
        document.getElementById("cha-bonus").innerHTML = 1;
        //TODO If Human Variant is selected, show features.  
        document.getElementById("score-increase").textContent += humanAbilityScore;
        document.getElementById("age").textContent += humanAge;
        document.getElementById("alignment").textContent += humanAlignment;
        document.getElementById("size").textContent += humanSize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += humanLanguages;
        document.getElementById("features").innerHTML += humanFeatures;

              
    } else if (listRace === 'Tiefling') {
        
        clearTotals();
        
        racialCha = 2;
        racialInt = 1;
        totalRoll();
        
        subrace.options.length=0;
        subrace.options[0] = new Option('Tiefling');
        //Crazy amount of Tiefling variants
        
        clearFeatures();
        
        document.getElementById("int-bonus").innerHTML = 1;
        document.getElementById("cha-bonus").innerHTML = 2;
        document.getElementById("score-increase").textContent += chaPlusTwo + ' ' + intPlusOne;
        document.getElementById("age").textContent += tieflingAge;
        document.getElementById("alignment").textContent += tieflingAlignment;
        document.getElementById("size").textContent += tieflingSize;
        document.getElementById("speed").textContent += speed30;
        document.getElementById("languages").textContent += tieflingLanguages;
        document.getElementById("features").innerHTML += tieflingFeatures;
    }
};

raceSubrace(); 

//Pseudo Code:
// Click selector to choose a different race.
    // DONE
// Display racial features and bonuses
    // DONE!
    // DONE: Figure out how to clear the data when changing races!
// Click button to roll stats.
    // DONE! Create the buttons.
    // DONE! Make the on-click event.  
// DONE!  Add stuff together.  
// Possible save stats for later?

