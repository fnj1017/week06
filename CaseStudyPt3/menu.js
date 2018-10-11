window.onchange = function() {
	var inputJavaQuan = document.getElementById("inputJavaQuan");
	var inputJavaSubTotal = document.getElementById("inputJavaSubTotal");
	inputJavaQuan.addEventListener("change", onChangeJavaQuan, false);

	var inputLaitQuan = document.getElementById("inputLaitQuan");
	var inputLaitSubTotal = document.getElementById("inputLaitSubTotal");
	inputLaitQuan.addEventListener("change", onChangeLaitQuan, false);

	var inputCappQuan = document.getElementById("inputCappQuan");
	var inputCappSubTotal = document.getElementById("inputCappSubTotal");
	inputCappQuan.addEventListener("change", onChangeCappQuan, false);

	var inputTotal = document.getElementById("inputTotal");
}

function onChangeJavaQuan(event) {
	updateJavaSubTotal();
	updateTotal();
}

function onChangeLaitQuan(event) {
	updateLaitSubTotal();
	updateTotal();
}

function onChangeCappQuan(event) {
	updateCappSubTotal();
	updateTotal();
}

function getJavaSubTotal() {
	return parseFloat(inputJavaQuan.value * 2.0);
}

function getLaitSubTotal() {
	var selectedVal = getRadioSel('auLait'); //get radio select
	var unitPrice;
	switch (selectedVal) {
		case "1":
		unitPrice = 2.0;
		break;
		case "2":
		unitPrice = 3.0;
		break;
	}
	return parseFloat(inputLaitQuan.value * unitPrice);
}

function getCappSubTotal() {
	var selectedVal = getRadioSel('Cappuccino');
	var unitPrice;
	switch (selectedVal) {
		case "1":
		unitPrice = 4.75;
		break;
		case "2":
		unitPrice = 5.75;
		break;
	}
	return parseFloat(inputCappQuan.value * unitPrice);
}

function updateJavaSubTotal() {
	inputJavaSubTotal.value = getJavaSubTotal().toFixed(2);
}

function updateLaitSubTotal() {
	inputLaitSubTotal.value = getLaitSubTotal().toFixed(2);
}

function updateCappSubTotal() {
	inputCappSubTotal.value = getCappSubTotal().toFixed(2);
}

function updateTotal() {
	inputTotal.value = (getJavaSubTotal() + getLaitSubTotal() + getCappSubTotal()).toFixed(2);
}

function getRadioSel(radioName) {
	var radiosLait = document.getElementsByName(radioName);
	for (var i = 0; i < radiosLait.length; i++) {
		if (radiosLait[i].checked) {
			return radiosLait[i].value;
		}
	}
	return -1;
}
