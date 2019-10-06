// Who wants to be a Millionaire
// Author: Mitchell Desjardins
// Email: mtdesjardins@myseneca.ca
// Student Number: 059863126
// Section Number: WEB222SJJ

//Global Variables to account for lives, numbers, and choices
let lives = 1, playerName, walkAway, choice, randomIndex, counter = 0, friend = 2, roundNumber;
let moneyvalues = [100, 500, 10000, 25000, 50000, 75000, 125000, 500000, 1000000], winnings;

class Question 
{ //constructor for Question, possible answers, and one right answer
    constructor(t,oA,oB,oC,oD,rA){
      this.question=t;
      this.optionA=oA;
      this.optionB=oB;
      this.optionC=oC;
      this.optionD=oD;
      this.rightAnswer=rA;
    }
    askQuestion(){
      choice = prompt(`${this.question}\n A. ${this.optionA}\n B. ${this.optionB}\n C. ${this.optionC}\n D. ${this.optionD}`);
    }
    showQuestion(){
      alert(`${this.question}\n A. ${this.optionA}\n B. ${this.optionB}\n C. ${this.optionC}\n D. ${this.optionD}`);
    }
}

// Questions for the three rounds that increase in difficulty 
const round=[];
  round.push(new Question("What is the first rule of Fight Club?", "Always talk about Fight Club", "Bring a dessert to Fight Club", "Be home before Midnight", "Never talk about Fight Club", "D")); //1
  round.push(new Question("Who went to school with a lamb?","Mary","Mitchell","Kadeem","Mr. Trump","A")); //2
  round.push(new Question("What temperature does water boil at?", "0C", "100C", "150C","75C","B")); //3
  round.push(new Question("What did the crocodile swallow in Peter Pan?", "Tinker Bell", "Peter Pan", "Alarm Clock", "The Map", "C")); //4
  round.push(new Question("Where is the smallest bone in the body?", "Finger Tip", "Ear", "Nose Tip", "Spine Disk", "B")); //5
  round.push(new Question("Who cut off Van Gogh’s ear?", "His Wife", "His Mother", "His Lover", "Himself", "D")); //6
  round.push(new Question("When did the Second World War end?", "1940", "1947", "1944", "1945", "D")); //7
  round.push(new Question("Which TV character said, “Live long and prosper”?", "Mr Spock from Star Trek", "Peter Griffen from Family Guy", "Anderson Cooper from CNN", "Mr Trump from Fox and Friends", "A")); //8
  round.push(new Question("What is the name of Batman’s butler?", "Mitchell", "Albert", "Alfred", "Ainstein", "C")); //9
  round.push(new Question("The average human body contains how many pints of blood?", "Nine", "Twelve", "Seven", "Sixteen", "A")); //10
  round.push(new Question("The Pyrenees mountain range separates which two European countries?", "Germany and Spain", "France and Spain", "Spain and Italy", "Italy and France", "B")); //11
  round.push(new Question("Which of the planets is closest to the sun?", "Mars", "Mercury", "Jupiter", "Uranus", "B")); //12
  round.push(new Question("According to Greek mythology who was the first woman on earth?", "Eve", "Amazons", "Athena", "Pandora", "D")); //13
  round.push(new Question("What is the third sign of the Zodiac?", "Cancer", "Gemini", "Virgo", "Sagittarius", "B")); //14
  round.push(new Question("Entomology is the branch of science that studies what?", "Soil", "Dreams", "Insects", "Gems", "C")); //15
  round.push(new Question("Which is the most populous U.S. state?", "New York", "California", "Texas", "Florida", "B")); //16
  round.push(new Question(" Which virus causes bleeding in the body due to the destruction of blood vessels?", "Aids virus", "Ebola virus", "Pig Flu", "Hepatitis", "B")); //17
  round.push(new Question("Where in the human body would you find the medulla oblongata?", "The brain", "The knee", "The stomach", "The heart", "A")); //18
  round.push(new Question("Les Fauves was a name given to a group of artists that included Matisse. What is its literal meaning?", "The Painters", "The Wild Beasts", "The Muses", "The Lions", "B")); //19
  round.push(new Question("What color does gold leaf appear if you hold it up to the light?", "Gold", "Yellow", "Orange", "Green", "D")); //20
  round.push(new Question("How many legs does a lobster have?", "10", "8", "12", "16", "A")); //21
  round.push(new Question("HOW MANY POINTS DOES THE MAPLE LEAF ON THE FLAG HAVE?", "8", "9", "10", "11", "D")); //22
  round.push(new Question("Which Christian celebration is influenced by the Passover?", "Good Friday", "Palm Sunday", "Easter", "Pentecost", "A")); //23
  round.push(new Question("In what year was the first modern Olympic Games held?", "1820", "1896", "1877", "1836", "B")); //24
  round.push(new Question("Which videogame holds the record for having the highest budget ever to produce?", "World of Warcraft", "Skyrim", "Grand Theft Auto V", "Legend of Zelda: Breath of the Wild", "C")); // question 25



//walkAway function will ask if they play wants to continue or not
function walkAsk(){
  walkAway = prompt(`${playerName} you can walk away with ${winnings}... What will you do?\n A. Walk Away\n B. Stay`);
  //The player decided to leave and will end the game 
    if(walkAway == 'A' || walkAway == 'a'){
      alert(`Thanks for playing ${playerName}, please play again!`)
      endGame();
   } else{
    //The player is moving on and decided to stay
      alert(`Thanks for sticking around ${playerName}! You current have $${winnings}\n Let's move onto the next round!`);
    //if this is the first ask then second round will be played
        if(roundNumber==2){
          secondRound();
        }else if (roundNumber == 3){
      //this would be the second ask, thus the third round will be played
          thirdRound();
        } else{
    //since the third round has been played I've inputted endGame function to be safer than sorry
          endGame();
}}}

//checkAsnwer function
function checkAnswer(){
  if(choice.toUpperCase() == round[randomIndex].rightAnswer){
    alert(`Correct Answer!\n Here is your next question.`);
   }else{
    alert(`Sorry Wrong Answer!\n Better luck next time!`);
    winnings = 0;
    lives = 0;
    endGame();
  }
  
  if(lives == 1){
    winnings = moneyvalues[counter];
    counter++
    return lives = 1;
    } else{
      return lives = 0;
    }
}

function firstRound(){
  for( let i = 0; i < 3; i++){
    if(lives == 1){
    round[getNumber()].askQuestion();
    checkAnswer();
    remove();}
    else
    lives = 0;
  }
    if (lives == 1){
  roundNumber = 2;
  walkAsk();}
  else 
  lives = 0;
}

function secondRound(){
    for( let i = 0; i < 3; i++){
    if(lives == 1){
    if(friend == 2 || friend == 1){    
    round[getNumber()].showQuestion();
      ask = prompt(`After seeing the question, would you like to call a Friend?\n Yes or No`);
      if(ask == 'yes' || ask == 'Yes'){
        callFriend();
      }else{
        round[randomIndex].askQuestion();
        checkAnswer();
        remove();
      }
    }else{
    round[getNumber()].askQuestion();
    checkAnswer();
    remove();
    }
    }else
   lives = 0;
}
  roundNumber = 3;
  walkAsk();
}

function thirdRound(){
  roundNumber =3;
   for( let i = 0; i < 3; i++){
    if(lives==1){
    if(friend == 2 || friend == 1){    
    round[getNumber()].showQuestion();
      ask = prompt(`After seeing the question, would you like to call a Friend?\n Yes or No`);
      if(ask == 'yes' || ask == 'Yes'){
        callFriend();
      }else{
        round[randomIndex].askQuestion();
        checkAnswer();
        remove();
      }
    }else{
    round[getNumber()].askQuestion();
    checkAnswer();
    remove();
    }
    } else
    lives = 0;
  }
  
  endGame();
}

function callFriend(){
   if(round[randomIndex].rightAnswer == "A" || round[randomIndex].rightAnswer == "D"){
        choice = prompt(`${round[randomIndex].question}\n A. ${round[randomIndex].optionA}\n B. \n C. \n D. ${round[randomIndex].optionD}`);
    } else {
       choice = prompt(`${round[randomIndex].question}\n A. \n B. ${round[randomIndex].optionB}\n C. ${round[randomIndex].optionC}\n D. `);
    } 
    checkAnswer();
    remove();
    return friend--;
}


function endGame(){
if (counter == 9){
  alert(`You Have Won The Millionth Dollar: $${winnings} Congratulations!`);
  alert(`Thanks For Playing!`);
} else {
  alert(`You Are Walking Away With $${winnings} From Your Bank!`);
  alert(`Thanks For Playing!`);
}
  return 0;
}

function startGame(){
  alert(`Welcome to Who Wants To Be A Millionaire!`);
  playerName = prompt(`Please Enter in your name.`);
  alert(`Rules to the game:\n 1. You must answer all questions correct.\n 2. One wrong answer and you're OUT OF THE GAME!\n 3. There are three questions per round.\n 4. After Round 1 and 2 you'll be given the option to walk away with your winnings.\n 5. Round 2 and 3 you'll be given the option to call a friend, but only once.\n 6. HAVE FUN! `)
  firstRound();
}

startGame();
