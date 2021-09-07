player1_name = localStorage.getItem("Player 1");
player2_name = localStorage.getItem("Player 2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn : " + player2_name;

function send() {
    getWord = document.getElementById("question").value;
    word = getWord.toLowerCase();
    console.log("the word is- " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    len = Math.floor(word.length/2);
    charAt2 = word.charAt(len);
    console.log(charAt2);

    last = word.length-1;
    charAt3 = word.charAt(last);
    console.log(charAt3);

    r1 = word.replace(charAt1, "_");
    r2 = r1.replace(charAt2, "_");
    r3 = r2.replace(charAt3, "_");
    console.log(r3);
    question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("question").value=" ";
    
}



question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer is"+answer);

    if(answer == word) {
        if(answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }

        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }



    if(question_turn=="player1") {
        question_turn= "player2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
    }

    else {
        question_turn= "player1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
    }

    if(answer_turn=="player1") {
        answer_turn= "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
    }

    else {
        answer_turn= "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
    }

    document.getElementById("output").innerHTML=" ";
}