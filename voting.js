let McGovern = document.getElementById("blue");
McGovern.addEventListener("mouseover",moveButton);

function moveButton(){
    McGovern.style.position = "absolute";
    let X = (Math.round(Math.random()*90));
    let Y = (Math.round(Math.random()*90));
    McGovern.style.left = X + "vw";
    McGovern.style.top = Y + "vh";
}

// document.onmousemove = mouseCoordinates;

function voteCounted(){
document.getElementById("directions").innerHTML = "Thank You For Voting Richard Nixon";
console.log("vote counted")
}

function voteNixon(){
    alert("VOTE FOR NIXON")
}