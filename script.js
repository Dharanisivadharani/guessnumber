//selecting elements
var inputBox = document.getElementById("inputBox")
var result = document.getElementById("result")
var guess = document.getElementById("guess")
var noofguess=3

//Generate Random Number  From 1 to 5

var randomnumber = Math.floor(Math.random() * 10) + 1 // 1 to 10
if (randomnumber > 5) 
    {
    randomnumber = randomnumber - 5

    }
    //event
    function checkthenumber() 
    {
    if(inputBox.value == randomnumber)
         {
        alert("you got it right,congratulation")
        result.textContent = "you are right !"
    }
    else{
        noofguess=noofguess - 1
        if (noofguess == 0)
             {
            alert("you lost,generate random number is:" + randomnumber)
        }
        guesscount.textContent = "available guesses:" + noofguess
        result.textContent = "you are wrong!"
    }
}
