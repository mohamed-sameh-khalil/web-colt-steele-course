var running = true;

var score_1 = document.getElementById("score_1");
var score_2 = document.getElementById("score_2");
var max_score = document.getElementById("max_score");
var max_score_input = document.getElementById("max_score_input");
var p1_but = document.getElementById("p1_but");
var p2_but = document.getElementById("p2_but");
var reset_but = document.getElementById("reset_but");

var p_wins = function (id) {
    console.log("p_wins called");
    if(id == p1_but.id)
    {
        score_1.classList.add("green");
    }

    else
        score_2.classList.add("green")

    running = false;

};

var reset = function () {
    console.log("reset called");
    running = true;
    max_score.textContent = "7";

    max_score_input.value = "";

    score_2.classList.remove("green");
    score_2.textContent = "0";

    score_1.classList.remove("green");
    score_1.textContent = "0";
};

var p_but = function () {
    console.log("inc_but called");
    if(!running)
        return;
    var score;
    if(this === p1_but)
        score = score_1;
    else if(this === p2_but)
        score = score_2;

    score.textContent = 1 + Number(score.textContent);

    if(Number(score.textContent) >= Number(max_score.textContent))
        p_wins(this.id);
};

var input_change = function () {
    console.log("input_change called");
    if(!running)
        return;
    var score = Number(this.value);

    if(
        score <= Number(score_1.textContent)
        ||
        score <= Number(score_2.textContent)
    )
    {
        this.value = max_score.textContent;
        return;
    }

    max_score.textContent = score;

};


p1_but.addEventListener("click", p_but);
p2_but.addEventListener("click", p_but  );

reset_but.addEventListener("click", reset)

max_score_input.addEventListener("change", input_change)

