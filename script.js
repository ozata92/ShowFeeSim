// 現在のステップ数を保持する変数
let currentStep = 1;

// 上演の種類を保持する変数
let performanceType;

// 次のステップへ移動するための関数
function nextStep(step) {
    // 現在のステップと異なるステップが指定された場合、関数はここで終了する
    if (step !== currentStep) return;

    // 設定幅が0.01から0.1の範囲内であることを確認する
    if (step === 1) {
        let settingWidth = document.getElementById('settingWidth').value;
        if (settingWidth < 0.01 || settingWidth > 0.1) return;
    }

    // 上演の種類を選択する
    if (step === 2) {
        performanceType = document.getElementById('performanceType').value;
    }

    // 現在のステップを非表示にし、次のステップを表示する
    document.getElementById(`step${currentStep}`).classList.add('hidden');
    currentStep += 1;
    document.getElementById(`step${currentStep}`).classList.remove('hidden');

    // 最終ステップに達した場合、計算を行う
    if (currentStep === 8) {
        calculate();
    }
}

// 計算を行うための関数
function calculate() {
    // 各値を取得する
    let settingWidth = document.getElementById('settingWidth').value;
    let ticketPrice = document.getElementById('ticketPrice').value;
    let seatNumber = document.getElementById('seatNumber').value;
    let performanceNumber = document.getElementById('performanceNumber').value;
    let subsidy = document.getElementById('subsidy').value;
    let sponsorFee = document.getElementById('sponsorFee').value;

    // 上演の種類が高校演劇の場合、計算結果は一律5000円とする
    if (performanceType === 'highschool') {
        document.getElementById('final-result').innerText = `最終結果: 5000円`;
        document.getElementById('calculation-process').innerText = `計算過程: 高校演劇の場合、計算結果は一律5000円です。`;
        return;
    }

    // 各変数の計算を行う
    let A = ticketPrice;
    let B = seatNumber * performanceNumber;
    let C = A * B;
    let E = C;
    let F = subsidy;
    let G = sponsorFee;
    let H = E - F - G;
    let I = H * settingWidth;
    let J = Math.ceil(I);

    // 最終結果を表示する
    document.getElementById('final-result').innerText = `最終結果: ${J}円`;

    // 計算過程を表示する
    let calculationProcess = `計算過程: \n`;
    calculationProcess += `A (チケット料金) = ${A}円 \n`;
    calculationProcess += `B (総席数) = チケット料金 * 上演回数 = ${A} * ${B} = ${B}席 \n`;
    calculationProcess += `C (総収入見込み) = A * B = ${A} * ${B} = ${C}円 \n`;
    calculationProcess += `E (上演割合適用後の収入見込み) = C = ${C}円 \n`;
    calculationProcess += `F (助成金/補助金) = ${F}円 \n`;
    calculationProcess += `G (委託費/スポンサー費) = ${G}円 \n`;
    calculationProcess += `H (EからF, Gを差し引いたもの) = E - F - G = ${E} - ${F} - ${G} = ${H}円 \n`;
    calculationProcess += `I (設定幅を適用した金額) = H * 設定幅 = ${H} * ${settingWidth} = ${I}円 \n`;
    calculationProcess += `J (最終結果: Iを四捨五入した金額) = ${J}円`;

    document.getElementById('calculation-process').innerText = calculationProcess;
}
