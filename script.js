// HTMLの各要素を取得
let widthSetting = document.getElementById('widthSetting');
console.log('widthSetting:', widthSetting);
let typeSetting = document.getElementById('typeSetting');
console.log('typeSetting:', typeSetting);
let ticketPrice = document.getElementById('ticketPrice');
console.log('ticketPrice:', ticketPrice);
let numberOfSeats = document.getElementById('numberOfSeats');
console.log('numberOfSeats:', numberOfSeats);
let numberOfShows = document.getElementById('numberOfShows');
console.log('numberOfShows:', numberOfShows);
let subsidy = document.getElementById('subsidy');
console.log('subsidy:', subsidy);
let result = document.getElementById('result');
console.log('result:', result);
let calculationProcess = document.getElementById('calculationProcess');
console.log('calculationProcess:', calculationProcess);

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
toStep2.addEventListener('click', function() { switchStep(1); });
toStep3.addEventListener('click', function() { switchStep(2); });
toStep4.addEventListener('click', function() { switchStep(3); });
toStep5.addEventListener('click', function() { switchStep(4); });
toStep6.addEventListener('click', function() { 
    let fee = calculateFee();
    result.textContent = fee + "円";
    calculationProcess.textContent = `(${ticketPrice.value} * ${numberOfSeats.value} * ${numberOfShows.value} + ${subsidy.value}) * ${widthSetting.value}`;
    switchStep(5); 
    console.log('Final calculation:', fee);
});

// 計算処理
function calculateFee() {
    console.log('Calculating fee...');
    // 高校演劇の場合は5000円で確定
    if(typeSetting.value == "1") {
        console.log('High school performance, fee is 5000 yen.');
        return 5000;
    }
    // 上演の種類が一般公演の場合
    else {
        let fee = (Number(ticketPrice.value) * Number(numberOfSeats.value) * Number(numberOfShows.value) + Number(subsidy.value)) * Number(widthSetting.value);
        // 5000円未満は切り上げ
        if(fee < 5000) {
            console.log('Fee less than 5000 yen, rounding up to 5000.');
            fee = 5000;
        }
        console.log('Calculated fee:', fee);
        return Math.floor(fee);
    }
}

console.log('JavaScript loaded successfully');
