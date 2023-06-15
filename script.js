let step = 1;
let performanceType, ticketPrice, venueCapacity, performanceTimes, subsidy, commissionFee, configWidth;
let calculationProcess = '';

function nextStep(currentStepId) {
    // Hide current step
    document.getElementById(currentStepId).classList.add('hidden');
    
    // Gather data
    if (currentStepId === 'step1') {
        performanceType = document.getElementById('performance-type').value;
    } else if (currentStepId === 'step2') {
        ticketPrice = parseInt(document.getElementById('ticket-price').value, 10);
    } else if (currentStepId === 'step3') {
        venueCapacity = parseInt(document.getElementById('venue-capacity').value, 10);
    } else if (currentStepId === 'step4') {
        performanceTimes = parseInt(document.getElementById('performance-times').value, 10);
    } else if (currentStepId === 'step5') {
        subsidy = parseInt(document.getElementById('subsidy').value, 10);
    } else if (currentStepId === 'step6') {
        commissionFee = parseInt(document.getElementById('commission-fee').value, 10);
    }
    
    // Show next step
    step++;
    document.getElementById(`step${step}`).classList.remove('hidden');
}

function calculatePerformanceFee() {
    configWidth = parseFloat(document.getElementById('config-width').value);
    
    let performanceFee;

    if (performanceType === 'highschool') {
        performanceFee = 5000;
    } else {
        performanceFee = ((ticketPrice * venueCapacity * performanceTimes) + subsidy + commissionFee) * configWidth;
    }
    
    calculationProcess = `((チケット料金：${ticketPrice} * 会場客席数：${venueCapacity} * 上演回数：${performanceTimes}) + 助成金/補助金：${subsidy} + 委託費/スポンサー費：${commissionFee}) * 設定幅：${configWidth}`;

    if (performanceType !== 'highschool') {
        performanceFee = Math.ceil(performanceFee / 5000) * 5000;  // Round up to nearest 5000 yen
    }
    
    // Display the results
    document.getElementById('calculation').innerText = `計算過程：${calculationProcess}`;
    document.getElementById('result').innerText = `上演料：${performanceFee}円`;
}