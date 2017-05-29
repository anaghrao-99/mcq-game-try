// var choice1 = document.querySelector("#choice1");
// var choice2 = document.querySelector("#choice2");
// var choice3 = document.querySelector("#choice3");
// var choice4 = document.querySelector("#choice4");
// var next = document.querySelector("#next");
var body = document.querySelector("body");
var question = document.querySelector("#question")
var butt1 = document.querySelector("#butt1");
var buttons = document.querySelector(".buttons");
var butt2 = document.querySelector("#butt2");
var butt3 = document.querySelector("#butt3");
var butt4 = document.querySelector("#butt4");



butt1.addEventListener("click", function(){
	butt1.style.border="7px solid red";
	question.textContent = "SORRY GAME OVER";
	body.classList.remove("buttons");

})

butt2.addEventListener("click", function(){
	butt2.style.border="7px solid red";
	question.textContent = "SORRY GAME OVER";
	body.classList.remove("buttons");
})

butt3.addEventListener("click", function(){
	butt3.style.border="7px solid green";
	question.textContent = "Congratuations you won!";
})

butt4.addEventListener("click", function(){
	butt4.style.border="7px solid red";
	question.textContent = "SORRY GAME OVER";
	body.classList.remove("buttons");
});

// next.addEventListener("click", function(){
// 	question.textContent="The people of Essos speak Dothraki, but what does this word translate to?";
// 	choice1.textContent="Horse Warrior";
// 	choice2.textContent="Horse Lord";
// 	choice3.textContent="We Ride";
// 	choice4.textContent="FuckOff";
// 	next.textContent="ThankYou";
// 	next.style.border=0;
// 	butt1.style.border="1px solid white";
// 	butt2.style.border="1px solid white";
// 	butt3.style.border="1px solid white";
// 	butt4.style.border="1px solid white";
	




// });

// butt1.addEventListener("click",function(){
// 	butt1.style.background = "green";
// 	butt1.style.border = "0px";
// 	butt1.style.color = "black";
// });

// butt2.addEventListener("click",function(){
// 	butt2.style.background = "red";
// 	butt2.style.border = "0px";
// 	butt2.style.color = "black";
// });

// butt3.addEventListener("click",function(){
// 	butt3.style.background = "red";
// 	butt3.style.border = "0px";
// 	butt3.style.color = "black";
// });

// butt4.addEventListener("click",function(){
// 	butt4.style.background = "red";
// 	butt4.style.border = "0px";
// 	butt4.style.color = "black";
// });