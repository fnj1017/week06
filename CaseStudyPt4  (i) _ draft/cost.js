window.onload = function(){
  var inputJavaQuan = document.getElementById("inputJavaQuan");
  var inputJavaSubTotal = document.getElementById("inputJavaSubTotal");
  inputJavaQuan.addEventListener("change", onChangeJavaQuan, false);

  var inputCafeQuan = document.getElementById("inputCafeQuan");
	var inputCafeSubTotal = document.getElementById("inputCafeSubTotal");
	inputCafeQuan.addEventListener("change", onChangeCafeQuan, false);

	var inputCappQuan = document.getElementById("inputCappQuan");
	var inputCappSubTotal = document.getElementById("inputCappSubTotal");
	inputCappQuan.addEventListener("change", onChangeCappQuan, false);

	var inputTotal = document.getElementById("inputTotal");
}

function onChangeJavaQuan(event){
  updateJavaSubTotal();
  updateTotal();
}

function onChangeCafeQuan(event){
	updateCafeSubTotal();
	updateTotal();
}

function onChangeCappQuan(event){
	updateCappSubTotal();
	updateTotal();
}

function getJavaSubTotal(){
  return parseFloat(inputJavaQuan.value * 2.0);
}

function getCafeSubTotal(){
  var selectedVal = getSelectedVal('cafe');
  var unitPrice;
  switch (selectedVal){
    case "SingleCafe":
    unitPrice = 2.0;
    break;
    case "DoubleCafe":
    unitPrice = 3.0;
    break;
  }
  return parseFloat(inputCafeQuan.value * unitPrice);
}

function getCappSubTotal(){
  var selectedVal = getSelectedVal('cappuccino');
  var unitPrice;
  switch (selectedVal){
    case "SingleCappu":
    unitPrice = 4.75;
    break;
    case "DoubleCappu":
    unitPrice = 5.75;
    break;
  }
  return parseFloat(inputCappQuan.value * unitPrice);
}

function updateJavaSubTotal(){
  inputJavaSubTotal.value = getJavaSubTotal().toFixed(2);
}

function updateCafeSubTotal(){
  inputCafeSubTotal.value = getCafeSubTotal().toFixed(2);
}

function updateCappSubTotal(){
  inputCappSubTotal.value = getCappSubTotal().toFixed(2);
}

function updateTotal(){
  inputTotal.value = (getJavaSubTotal() + getCafeSubTotal() + getCappSubTotal()).toFixed(2)
}

function getSelectedVal(radioName){
  var radioCafe = document.getElementsByName(radioName);
  for(var i = 0; i < radioCafe.length; i++){
    if(radioCafe[i].checked){
      return radioCafe[i].value;
    }
  }
  return -1;
}
