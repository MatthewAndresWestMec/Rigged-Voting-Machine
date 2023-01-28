// let McGovern = document.getElementById("blue");
// McGovern.addEventListener("mouseover",moveButton);

// function moveButton(){
//     McGovern.style.position = "absolute";
//     let X = (Math.round(Math.random()*90));
//     let Y = (Math.round(Math.random()*90));
//     McGovern.style.left = X + "vw";
//     McGovern.style.top = Y + "vh";
// }

//the create error function for voting McGovern
let blueElement = document.getElementById("blue");
blueElement.addEventListener("click", function() {
    let errors = ["Error: Something went wrong!", "Error: Invalid input!", "Error: Please try again!", "Error: System overload!"];
    for (let i = 0; i < errors.length; i++) {
        let errorDiv = document.createElement("div");
        errorDiv.innerHTML = errors[i];
        errorDiv.style.position = "absolute";
        errorDiv.style.left = Math.random() * 100 + "%";
        errorDiv.style.top = Math.random() * 100 + "%";
        errorDiv.classList.add("error");
        document.body.appendChild(errorDiv);
        setTimeout(function() {
            errorDiv.remove();
        }, 3000);
    }
});

//onclick event listener for Nixon
function voteCounted(){
    document.getElementById("directions").innerHTML = "Thank You For Voting Richard Nixon";
    console.log("vote counted")
    }

// this is the onload function
function voteNixon(){
    alert("VOTE FOR NIXON")
}

//context menu event
window.oncontextmenu = function(event) {
    event.preventDefault();
    var directions = document.getElementById("directions");
    directions.innerHTML = "Vote for Nixon ;)";
    setTimeout(function() {
        directions.innerHTML = "Vote:";
    }, 3000);
}

//cursor follow eagle uses client x and y
let cursorImage = document.getElementById("cursor-image");
document.addEventListener("mousemove", function(event) {
    cursorImage.style.left = event.clientX + 60 + "px";
    cursorImage.style.top = event.clientY + 60 + "px";
});

