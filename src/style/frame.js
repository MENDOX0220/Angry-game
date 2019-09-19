const angry = document.getElementById("angry");
var scoreboard = document.getElementById('score');
var fountain = document.getElementById('fountain');
var audio = document.getElementById('audio');
var game = false;

function start(){
    game = true;
    document.getElementById('start').style.display = "none";
    console.log("D");
}

var x = "30";
var y;
var tmp = 30;
var score = 0;
var pp = 0;
var cc = 3;
var counter = {};


for (var i = 0; i < 15; i++) {
  var arr = [];
  arr[i] = document.getElementById("fountain" + i);
}

window.addEventListener("load", function () {
  counter.end = 60;
  counter.sec = document.getElementById("cd-sec");

  if (counter.end > 0) {
    counter.ticker = setInterval(function () {
      if (game == true) {
        counter.end--;
        if (counter.remain <= 0) {
          clearInterval(counter.ticker);
        }
        var secs = counter.end;
        var mins = Math.floor(secs / 60);
        secs -= mins * 60;

        counter.sec.innerHTML = secs;
      }
      if (secs == 0) {
        game = false;
        document.getElementById('done').style.display = "block";
        console.log('done');
        var ia = document.getElementById('Lastscore');
        ia.innerHTML = "화나요 X " + score;
      }
    }, 1000);
  }
});

document.body.onkeyup = function (e) {
  if (game == true) {
    var key = e.keyCode;
    if (pp == 1) {
      if (Boolean(key)) {
        audio.play();
        plus();
        audio.play();
      }
    }
    else if (key == 68 || key == 70 || key == 74 || key == 75) {
      audio.play();
      plus();
      audio.play();
    }
  }
};

function plus() {
  if (game == true) {
    if (tmp >= 950) {
      console.log("done");
      score++;
      scoreboard.innerHTML = score;
    }
    else {
      console.log(x);
      tmp += 0.9;
      x = tmp;
      angry.style.width = x + "px";
      angry.style.height = x + "px";
      score++;
      scoreboard.innerHTML = score;
      if (score == 100) {
        var egg1 = document.getElementById('egg1');
        egg1.style.display = "block";
        setTimeout(() => {
          egg1.style.display = "none"
        }, 4000);
      }
      if (score == 200) {
        var egg2 = document.getElementById('egg2');
        egg2.style.display = "block";
        setTimeout(() => {
          egg2.style.display = "none"
        }, 3000);
      }
      if (score == 300) {
        var egg3 = document.getElementById('egg3');
        egg3.style.display = "block";
        setTimeout(() => {
          egg3.style.display = "none"
        }, 3000);
      }
      if (score == 400) {
        var egg4 = document.getElementById('egg4');
        egg4.style.display = "block";
        setTimeout(() => {
          egg4.style.display = "none"
        }, 3000);
      }
      if (score == 500) {
        var egg5 = document.getElementById('egg5');
        egg5.style.display = "block";
        setTimeout(() => {
          egg5.style.display = "none"
        }, 3000);
      }
      if (score == 700) {
        var egg6 = document.getElementById('egg6');
        egg6.style.display = "block";
        setTimeout(() => {
          egg6.style.display = "none"
        }, 7000);
      }
    }
  }};

    function allkey() {
      pp = 1;
      if (cc == 0) {
        console.log("noSkill")
      }
      else {
        var bod = document.getElementById('palete');
        bod.style.background = "linear-gradient(to bottom, #c02425, #f0cb35)";
        var btn = document.getElementById('skillbtn');
        var n = btn.style;
        n.userSelect = "none";
        n.color = "#f8f8f8";
        n.fontWeight = "700";
        n.letterSpacing = "3px";
        n.background = "none";
        n.background = "#ff0f23";
        cc--;
        document.getElementById('skilldubb').innerHTML = "x " + cc;
        setTimeout(() => {
          pp = 0;
          n.color = "#ffffff";
          n.fontWeight = "100";
          n.letterSpacing = "none";
          n.backgroundColor = "#404040";
          document.getElementById('palete').style.background = "#3f3735";
          n.transition = "all 0.3s ease 0s"
        }, 5000);
      }
    }


