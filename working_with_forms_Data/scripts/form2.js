/* 
	Javascript source code for form2.html web page
	Author: Thanh-Tung Pham
	Date: Dec 4, 2017
*/

function validateDeliveryForm() {
	if (document.form2.fname.value.length === 0) {
		window.alert("You must enter your first name.");
		document.form2.fname.focus();
		return false;
	}
	else if (document.form2.lname.value.length === 0) {
		window.alert("You must enter your last name.");
		document.form2.lname.focus();
		return false;
	}
	else if (document.form2.street.value.length === 0) {
		window.alert("You must enter your address.");
		document.form2.street.focus();
		return false;
	}
	else if (document.form2.city.value.length === 0) {
		window.alert("You must enter the city.");
		document.form2.city.focus();
		return false;
	}
	else if (document.form2.zip.value.length === 0) {
		window.alert("You must enter zip code.");
		document.form2.zip.focus();
		return false;
	}
}