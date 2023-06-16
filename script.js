console.log("Script.js loaded");

// HTMLの各要素を取得
let widthSetting = document.getElementById('widthSetting');
console.log('widthSetting element:', widthSetting);
let typeSetting = document.getElementById('typeSetting');
console.log('typeSetting element:', typeSetting);
let ticketPrice = document.getElementById('ticketPrice');
console.log('ticketPrice element:', ticketPrice);
let numberOfSeats = document.getElementById('numberOfSeats');
console.log('numberOfSeats element:', numberOfSeats);
let numberOfShows = document.getElementById('numberOfShows');
console.log('numberOfShows element:', numberOfShows);
let subsidy = document.getElementById('subsidy');
console.log('subsidy element:', subsidy);
let result = document.getElementById('result');
console.log('result element:', result);
let calculationProcess = document.getElementById('calculationProcess');
console.log('calculationProcess element:', calculationProcess);

// 各ステップへのボタンを取得
let toStep2 = document.getElementById('toStep2');
let toStep3 = document.getElementById('toStep3');
let toStep4 = document.getElementById('toStep4');
let toStep5 = document.getElementById('toStep5');
let toStep6 = document.getElementById('toStep6');

// 全てのステップを取得
let steps = document.querySelectorAll('.step');

// ステップを切り替える関数
function switchStep(nextIndex) {
    console.log('Switching to step:', nextIndex + 1);
    for(let i = 0; i < steps.length; i++) {
        if(i == nextIndex) {
            steps[i].classList.add('show');
        } else {
            steps[i].classList.remove('show');
        }
    }
}

// 各ステップへのボタンにイベントリスナーを設定
toStep2.addEventListener('click', function() { console.log("toStep2 button clicked"); switchStep(1); });
toStep3.addEventListener('click', function() { console.log("toStep3 button clicked"); switchStep(2); });
toStep4.addEventListener('click', function() { console.log("toStep4 button clicked"); switchStep(3); });
toStep5.addEventListener('click', function() { console.log("toStep5 button clicked"); switchStep(4); });
toStep6.addEventListener('click', function() { 
    console.log("toStep6 button clicked");
    let fee = calculateFee();
    result.textContent = fee + "円";
    calculationProcess.textContent = `(${ticketPrice.value} * ${numberOfSeats.value} * ${numberOfShows.value} + ${subsidy.value}) * ${widthSetting.value}`;
    switchStep(5); 
    console.log('Final calculation:', fee);
});

// 計算処理
function calculateFee() {
    console.log('Calculating fee...');
    // 高校演劇を選択した場合は5000円
    if(typeSetting.value == "highSchool") {
        console.log('Type is high school, returning 5000');
        return 5000;
    }

    // 計算結果（5000円未満は切り上げ）
    let fee = Math.ceil((Number(ticketPrice.value) * Number(numberOfSeats.value) * Number(numberOfShows.value) + Number(subsidy.value)) * Number(widthSetting.value) / 5000) * 5000;
    console.log('Calculated fee:', fee);

    return fee;
}

// ページ読み込み時に初期ステップを表示
switchStep(0);
console.log('Initial step shown');
