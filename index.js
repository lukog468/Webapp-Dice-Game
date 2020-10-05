function play()
{

    var rand1 = Math.floor(Math.random()*6)+1;
    var rand2 = Math.floor(Math.random()*6)+1;
    
    document.querySelector(".dice1").setAttribute("src","images/dice"+rand1+".png");
    document.querySelector(".dice2").setAttribute("src","images/dice"+rand2+".png");
    document.querySelector(".refresh").style.fontSize = "5rem";
    document.querySelector(".btn").innerHTML = "Play Again";
    if (rand1>rand2)
    {
        document.querySelector(".winner").innerHTML = "Player 1 won!";
    }
    else if(rand1===rand2)
    {
        document.querySelector(".winner").innerHTML = "Match Draw!";
    }
    else
    {
        document.querySelector(".winner").innerHTML = "Player 2 won!";
    }
    
}
