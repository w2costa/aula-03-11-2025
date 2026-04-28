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

	// var items = document.getElementsByClassName("item");
	var items = $(".item");

	var total = 0;

	$(items).each(function (pos) {
		//for (var pos = 0; pos < items.length; pos++) {
		// var priceElements = items[pos].getElementsByClassName("price");
		// var priceText = priceElements[0].innerHTML;
		// var price = moneyTextToFloat(priceText);

		// var qtyElements = produtos[pos].getElementsByClassName("quantity");
		// var qtyText = qtyElements[0].value;
		// var quantity = moneyTextToFloat(qtyText);

		var $produto = $(items[pos]);

		var price = moneyTextToFloat($produto.find(".price").text());
		var quantity = moneyTextToFloat($produto.find(".quantity").val());

		total += (quantity * price);

	});

	return total;
}

function getFreightPrice() {

}

// function quantidadeMudou() {
// 	writeTotal(calculateTotalProducts());
// }

// function onDocumentLoad() {
// 	var textEdits = document.getElementsByClassName("quantity");
// 	for (var i = 0; i < textEdits.length; i++) {
// 		textEdits[i].onchange = quantidadeMudou;
// 	}
// }

// window.onload = onDocumentLoad;

$(function () {
	$(".quantity").change(function () {
		writeTotal(calculateTotalProducts());
	});
});
