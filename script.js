// ステップ1の設定幅 (F)
let F;

// ステップ2以降の値を格納するオブジェクト
let values = {};

// ステップの進行度を管理する変数
let currentStep = 0;

// 各ステップで実行する関数
let stepFunctions = [
  function() {
    // ステップ1: 設定幅の入力
    F = Number(document.querySelector('input[name="performanceType"]:checked').value);
  },
  function() {
    // ステップ2: チケット料金の入力
    values.A = Number(document.getElementById('ticketPrice').value) * 100;  // 100円単位で入力される
  },
  function() {
    // ステップ3: 会場客席数の入力
    values.B = Number(document.getElementById('venueSeats').value);
  },
  function() {
    // ステップ4: 上演回数の入力
    values.C = Number(document.getElementById('numberOfPerformances').value);
  },
  function() {
    // ステップ5: 助成金/補助金の入力
    values.D = Number(document.getElementById('grantSubsidy').value) * 100;  // 100円単位で入力される
  },
  function() {
    // ステップ6: 委託費/スポンサー費の入力
    values.E = Number(document.getElementById('commissionSponsorFee').value) * 100;  // 100円単位で入力される
  },
  function() {
    // ステップ7: 計算結果の表示
    let total = Math.ceil((F * (values.A * values.B * values.C + values.D + values.E)) / 5000) * 5000;
    document.getElementById('calculationResult').innerText = total.toLocaleString();

    // 計算過程の表示 (新規追加部分)
    document.getElementById('calculationProcess').innerText = `F * (A * B * C + D + E) = ${F} * (${values.A} * ${values.B} * ${values.C} + ${values.D} + ${values.E}) = ${total}`;
  },
];

function nextStep() {
  // 現在のステップの処理を実行
  stepFunctions[currentStep]();
  // 次のステップに進む
  currentStep++;
  // 次のステップの内容を表示
  document.querySelector('.step.active').classList.remove('active');
  document.querySelector(`.step:nth-child(${currentStep + 1})`).classList.add('active');
}

document.getElementById('nextButton').addEventListener('click', nextStep);
