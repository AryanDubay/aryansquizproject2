let numOfHints = 10;
let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "Who is the Shardbearer in Caelid?",
	"a": "Radahn",
	"b": "Malenia",
	"c": "Radagon",
	"d": "Millicent",
	"image":"quizimages/q1.jpg",
	"hint": "He is a great General. ",
	"answer": "a"
   },
   {
	"question": "Who was the First Elden Lord?",
	"a": "Tarnished",
	"b": "Hoarah Loux ",
	"c": "Godfrey",
	"d": "Radagon",
	"image":"quizimages/q2.jpg",
	"hint": "Queen Marika's Husband",
	"answer": "c"
   },
   {
	"question": "What is the name of the Lord of Blood?",
	"a": "Mog",
	"b": "Mohg",
	"c": "Morgott",
	"d": "Margit",
	"image":"quizimages/q3.jpg",
	"hint": "He wants to build a dynasty",
	"answer": "b"
   },
    {
	"question": "Where does Malenia reside?",
	"a": "The Haligtree",
	"b": "The Erdtree",
	"c": "The Golden tree",
	"d": "Mohgwyn Palace",
	"image":"quizimages/q4.jpg",
	"hint": "Miquella's ________ tree",
	"answer": "a"
   },
    {
	"question": "Who is the vassel of the Greater Will",
	"a": "The Elden Beast",
	"b": "The 3 Fingers",
	"c": "The 2 Fingers",
	"d": "The Elden Ring",
	"image":"quizimages/q5.jpg",
	"hint": "A Great Beast",
	"answer": "a"
   },
    {
	"question": "Who is Destined Death?",
	"a": "Black Knife assassins",
	"b": "Godwyn",
	"c": "Rune of Death",
	"d": "Maliketh",
	"image":"quizimages/q6.jpg",
	"hint": "Marika's half brother",
	"answer": "d"
   },
    {
	"question": "What age does Ranni wish for?",
	"a": "Age of the Stars",
	"b": "Age of Fracture",
	"c": "Lord of the Frenzied Flame ",
	"d": "Age of Order",
	"image":"quizimages/q7.jpg",
	"hint": "'Lunar' Princess Ranni",
	"answer": "a"
   },
    {
	"question": "Who did Rennala once marry",
	"a": "Radagon",
	"b": "Marika",
	"c": "Ranni",
	"d": "A Carian Knight",
	"image":"quizimages/q8.jpg",
	"hint": "He would leave her for Marika",
	"answer": "a"
   },
    {
	"question": "Who gaurds the Erdtree?",
	"a": "Margit",
	"b": "Crucible Knight",
	"c": "Morgott",
	"d": "Godfrey",
	"image":"quizimages/q9.jpg",
	"hint": "He has a fell omen of himself",
	"answer": "c"
   },
   {
	"question": "Who gave you the whistle for torrent?",
	"a": "Ranni",
	"b": "Melina",
	"c": "Malenia",
	"d": "The Hermit Merchant",
	"image":"quizimages/q10.jpg",
	"hint": "She sacrifices herself to burn the Erdtree",
	"answer": "b"
   },
 ];
 
 function timer() {
	location.reload();
}
 
 function loadQuestion() {
	 
	 document.getElementById("restart").onclick = function() {
		location.reload();
}
	 closeEndBox();
     
	 closeStartBox();
	 
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	let hintbutton = document.getElementById("hintbutton");
	hintbutton.addEventListener("click", showHint);
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    let hintbutton = document.getElementById("hintbutton");
	
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "The seal trembles... " + score + " / " + questions.length + " levels accomplished .";
    } else {
       message = "Nothing Happened " + score + " / " + questions.length + " levels accomplished."; 
    } // else
   
       // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
  
	let hintext = document.getElementById("hint");
    // move to the next question
    currentQuestion++;
	hintbutton.disabled = false;
	hintext.innerText = numOfHints + " Hints remaining, Press 'Hint' for a Hint!";
	hintbutton.innerText = "Hint";
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "The seal has ruptured...";
	   document.getElementById("endscreen").style.visibility = "visible";
    } else {
       loadQuestion();
    }
    
 
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 function closeStartBox() {
    document.getElementById("startbox").style.display = "none";
 }
 
 function closeEndBox() {
	document.getElementById("endscreen").style.visibility = "hidden";	
 
 } // closeLightbox
 
 function showHint() {
let hintbutton = document.getElementById("hintbutton");
let hintext = document.getElementById("hint");
if (numOfHints >= 1) {
numOfHints--;
hintbutton.disabled = true;
hintbutton.innerText = numOfHints + " Hints left";
hintext.innerText = questions[currentQuestion].hint;
} else {
hintbutton.disabled = true;
hintbutton.innerText = "You have no hints left :(";
}
}
 
 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}                    