function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = $("#total").text();
	// var total = document.getElementById("total").innerText;
	return moneyTextToFloat(total);
}

function writeTotal(value) {
	var text = floatToMoneyText(value);
	$("#total").text(text);
	// document.getElementById("total").innerText = text;
}

function calculateTotalProducts() {
	var items = $(".item");

	var total = 0;

	for(var pos = 0; pos < items.length; pos++) {
		var $produto = $(items[pos]);

		var price = moneyTextToFloat($produto.find(".price").text());
		var quantity = moneyTextToFloat($produto.find(".quantity").val());

		total += (quantity * price);

	}

	return total;
}

function getFreightPrice() {
	
}