// HTMLの要素を取得
var form = document.getElementById("form");
var steps = Array.from(document.getElementsByClassName("step"));
var nextButtons = Array.from(document.getElementsByClassName("next"));
var prevButtons = Array.from(document.getElementsByClassName("prev"));
var estimationResult = document.getElementById("result");
var debugCalculation = document.getElementById("debugCalculation");

var A, B, C, D, E, F;

// 各ステップでの処理
function handleSteps(step) {
  switch(step) {
    case 0:
      F = document.getElementById("playType").value;
      if (F == "general" || F == "workshop") {
        F = prompt("設定幅を0.01～0.1の間で入力してください");
      } else if (F == "university") {
        F = prompt("設定幅を0.03～0.06の間で入力してください");
      } else if (F == "highschool") {
        F = 0.1;  // 高校演劇の場合は計算結果が5000円となるため設定幅は0.1とする
      }
      break;
    case 1:
      A = document.getElementById("ticketPrice").value;
      break;
    case 2:
      B = document.getElementById("venueSeats").value;
      break;
    case 3:
      C = document.getElementById("playTimes").value;
      break;
    case 4:
      D = document.getElementById("subsidy").value;
      break;
    case 5:
      E = document.getElementById("sponsorship").value;
      break;
    case 6:
      if (F == "highschool") {
        estimationResult.innerText = "計算結果: 5000円";
        debugCalculation.innerText = "高校演劇のため計算結果は固定の5000円です";
      } else {
        let calculation = Math.ceil(F * (A * B * C + D + E));
        estimationResult.innerText = "計算結果: " + calculation + "円";
        debugCalculation.innerText = "計算過程: " + F + " * (" + A + " * " + B + " * " + C + " + " + D + " + " + E + ")";
      }
      break;
  }
}

// 「次へ」ボタンが押されたときの処理
nextButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    steps[index].classList.add("hidden");
    steps[index+1].classList.remove("hidden");
    handleSteps(index+1);
  });
});

// 「戻る」ボタンが押されたときの処理
prevButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    steps[index+1].classList.add("hidden");
    steps[index].classList.remove("hidden");
  });
});
