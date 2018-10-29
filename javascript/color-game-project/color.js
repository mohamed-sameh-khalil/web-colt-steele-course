var hard_n = 6;
var easy_n = 3;
var n = 6;
var colors = generate_random_colors(n);

var squares = document.querySelectorAll(".square");
var answer = document.querySelector("#answer");
var h1 = document.querySelector("h1");

var easy = document.getElementById("easy");
easy.addEventListener("click", easy_but);
var hard = document.getElementById("hard");
hard.addEventListener("click", hard_but);


var reset = document.getElementById("reset");
reset.addEventListener("click", reset_fun);
var picked_color = pekkarandom();

document.getElementById("rgb").textContent = picked_color

for(var i = 0; i < n; i++){

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        reset.textContent = "Play Again";
        if(this.style.backgroundColor === picked_color)
        {
            change_colors(picked_color);
            answer.textContent = "Correct!";
            h1.style.backgroundColor = picked_color;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            answer.textContent = "Try again :("
        }
    });

}


function change_colors(color){
    for (var i = 0; i < n; i++) {

        squares[i].style.backgroundColor = color;

    }
}

function pekkarandom(){
    var index = Math.floor(Math.random() * n);

    return colors[index];
}


function generate_random_colors(num){
    arr = [];
    for (var i = 0; i < num; i++) {
        let color = "rgb(";
        color += Math.floor(Math.random() * 256) + ", ";
        color += Math.floor(Math.random() * 256) + ", ";
        color += Math.floor(Math.random() * 256) + ")";
        arr.push(color);
    }
    return arr;
}

function reset_fun() {
    colors = generate_random_colors(n);
    picked_color = pekkarandom();
    document.getElementById("rgb").textContent = picked_color;
    h1.style.backgroundColor = "#232323";
    for (let i = 0; i < n; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    this.textContent = "Change colors";
}

function hard_but(){
    if(hard.classList.contains("selected"))
        return;
    n = hard_n;

    for(var i = easy_n; i < hard_n; i++){
        squares[i].style.display = "block";
    }
    reset_fun();
    hard.classList.add("selected");
    easy.classList.remove("selected");
}


function easy_but(){
    if(easy.classList.contains("selected"))
        return;
    n = easy_n;

    for(var i = easy_n; i < hard_n; i++){
        squares[i].style.display = "none";
    }
    reset_fun();
    easy.classList.add("selected");
    hard.classList.remove("selected");
}









