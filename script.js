console.log("Script.js loaded");

// 全てのステップ要素を取得
const steps = document.querySelectorAll(".step");

// 次のステップに進む関数
function nextStep(currentStep) {
	console.log("現在のステップ:", currentStep);

	// 現在のステップを非アクティブにする
	steps[currentStep - 1].classList.remove("active");

	// 次のステップをアクティブにする
	steps[currentStep].classList.add("active");
}

// 計算と結果表示の関数
function calculate() {
	console.log("計算開始");

	// 変数を取得
	const ticketPrice = parseFloat(document.getElementById("ticketPrice").value);
	const seatCount = parseInt(document.getElementById("seatCount").value);
	const performanceCount = parseInt(document.getElementById("performanceCount").value);
	const grant = parseFloat(document.getElementById("grant").value);
	const sponsor = parseFloat(document.getElementById("sponsor").value);
	const range = parseFloat(document.getElementById("range").value);
	const category = document.getElementById("category").value;

	console.log("入力値:", ticketPrice, seatCount, performanceCount, grant, sponsor, range, category);

	// 計算
	let total = 0;
	if (category === "highschool") {
		total = 5000;
	} else {
		total = (ticketPrice * seatCount * performanceCount + grant + sponsor) * (category === "other" ? range * 0.6 : range);
	}

	// 5000円未満の端数を切り上げ
	total = Math.ceil(total / 5000) * 5000;

	console.log("計算結果:", total);

	// 計算過程の表示
	document.getElementById("ticketPriceProcess").textContent = ticketPrice;
	document.getElementById("seatCountProcess").textContent = seatCount;
	document.getElementById("performanceCountProcess").textContent = performanceCount;
	document.getElementById("grantProcess").textContent = grant;
	document.getElementById("sponsorProcess").textContent = sponsor;
	document.getElementById("rangeProcess").textContent = range;

	// 結果を表示
	document.getElementById("total").querySelector("span").textContent = total;

	// 計算結果ステップを表示
	steps[6].classList.remove("active");
	document.getElementById("result").classList.add("active");
	document.getElementById("calculationProcess").classList.add("active");
}
