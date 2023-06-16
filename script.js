console.log("Script.js loaded");

// ステップの変更関数
function switchStep(step) {
    let steps = document.querySelectorAll(".step");
    for(let i = 0; i < steps.length; i++) {
        if(i == step) {
            steps[i].style.display = "block";
        } else {
            steps[i].style.display = "none";
        }
    }
}

// ステップ間の移動イベントリスナー
document.getElementById("toStep2").addEventListener("click", function() {
    switchStep(1);
});
// 各ステップ間の移動イベントリスナーを設定します...
document.getElementById("showResult").addEventListener("click", function() {
    document.getElementById("fee").innerText = calculateFee();
    switchStep(8);
});

// リセットイベントリスナー
document.getElementById("reset").addEventListener("click", function() {
    switchStep(0);
});

// 著作権料計算関数
function calculateFee() {
    // ハイスクール演劇を選択した場合は5000円
    if(typeSetting.value == "highSchool") {
        console.log('Type is high school, returning 5000');
        return 5000;
    }

    // 計算結果（5000円未満は切り上げ）
    let fee = Math.ceil((Number(ticketPrice.value) * Number(numberOfSeats.value) * Number(numberOfShows.value) + Number(subsidy.value) + Number(commission.value)) * Number(widthSetting.value) / 5000) * 5000;
    console.log('Calculated fee:', fee);

    return fee;
}

// ページ読み込み時に初期ステップを表示
switchStep(0);
console.log('Initial step shown');
