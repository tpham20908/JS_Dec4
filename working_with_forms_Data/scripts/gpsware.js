/* 
	Javascript source code for gpsware web page
	Author: Thanh-Tung Pham
	Date: Dec 4, 2017
*/

/* 
	create the following functions
	1- showDate() displays the current date
	2- calculatePrice(): calculates the subtotal of products price and quantity
	3- calculateShipping(): returns the shipping cost
	4- calculateTotal(): calculates the total of the order
	5- validateForm(): validates data entry before submitting to the server side
*/

/*
	display the current date in the txtDate textfield
*/
// alert("Got here.");

function startForm() {
	document.forms[0].txtDate.value = showDate();

	// add the focus on the product list
	document.forms[0].prod.focus();
}

/* showDate() displays the current date */
function showDate() {
	// create date object
	var today = new Date();

	// extract data from today object
	var thisDate = today.getDate();
	var thisMonth = today.getMonth() + 1;
	var thisYear = today.getFullYear();
	// return the full date as mm/dd/yyyy
	var currentDate = thisMonth + "/" + thisDate + "/" + thisYear;
	return currentDate;
}

// calculatePrice(): calculates the subtotal of products price and quantity
function calculatePrice() {
	// declare variables
	var product = document.form1.prod;
	var pIndex = product.selectedIndex;

	// return the product value of the selected index
	var product_price = product.options[pIndex].value;

	var quantity = document.forms[0].qty;
	// selectedIndex property returns the index nmber of the currently selected option in the list
	var qIndex = quantity.selectedIndex;

	// return the quantity of the selected index
	var quantity_order = quantity.options[qIndex].value;

	// display the calculated subtotal in the txtPrice textfield
	document.forms[0].txtPrice.value = (product_price * quantity_order).toFixed(2);

	// call calculateTotal()
	calculateTotal();
}

// calculateShipping(): returns the shipping cost
function calculateShipping(shipOption) {
	document.forms[0].txtShip.value = shipOption.value;

	// call calculateTotal()
	calculateTotal();
}

// calculateTotal(): calculates the total of the order
function calculateTotal() {
	// declare variables
	var priceVal = parseFloat(document.getElementById('txtPrice').value);
	var shipVal = parseFloat(document.getElementById('txtShip').value);
	var TAX_RATE = 0.05;
	var taxVal = (priceVal + shipVal) * TAX_RATE;

	// display the subtotal
	document.forms[0].txtSub.value = priceVal + shipVal;
	// display the tax
	document.forms[0].txtTax.value = taxVal.toFixed(2);
	// display the subtotal
	document.forms[0].txtTot.value = (priceVal + shipVal + taxVal).toFixed(2);
}

// validateForm() validates data entry before submitted to the server side
function validateForm(argument) {
	if (document.forms[0].prod.selectedIndex === 0) {
		window.alert('You must select a GPS-ware product');
		document.forms[0].prod.focus();
		return false;
	}

	else if (document.forms[0].qty.selectedIndex === 0) {
		window.alert('You must select a quantity to order');
		document.forms[0].qty.focus();
		return false;
	}

	else if (document.forms[0].txtShip.value === "0.00") {
		window.alert('You must select a shipping option');
		document.forms[0].txtShip.focus();
		return false;
	}
}