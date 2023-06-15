var currentStep = 1;
var steps = ["step1", "step2", "step3", "step4", "step5", "step6", "step7", "result"];

var settings = {
    "general": { min: 0.01, max: 0.1 },
    "workshop": { min: 0.01, max: 0.1 },
    "university": { min: 0.03, max: 0.06 },
    "highschool": { min: 0.01, max: 0.1 }
};

var step1_input, step2_input, step3_input, step4_input, step5_input, step6_input;

function nextStep(current) {
    var value;
    switch (current) {
        case "step1":
            value = document.getElementById('config-width').value;
            step1_input = parseFloat(value);
            break;
        case "step2":
            value = document.getElementById('performance-type').value;
            step2_input = value;
            document.getElementById('config-width').min = settings[value].min;
            document.getElementById('config-width').max = settings[value].max;
            break;
        // Update the other steps here in a similar way as above
    }

    document.getElementById(current).classList.add("hidden");
    currentStep += 1;
    document.getElementById(steps[currentStep - 1]).classList.remove("hidden");
}

function calculate() {
    var result;

    if (step2_input === "highschool") {
        result = 5000;  // For high school performances, the result is always 5000 yen
    } else {
        // Perform the calculation here for the other types of performances
        // using the input values from the steps
    }

    document.getElementById('result').innerText = '計算結果: ' + result + '円';
}
