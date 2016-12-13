document.addEventListener("DOMContentLoaded", init);

function init(){
	var submitBtn = document.querySelector('#submitBtn');
	submitBtn.addEventListener('click', function(evt){
		editSettings(evt);
	});
}
function editSettings(evt){
	evt.preventDefault();
	var username = document.querySelector('#newUsername').value;
    var phonenumber = document.querySelector('#phonenumber').value;
    var school = document.querySelector('#schoolname').value;
	var warning = document.querySelector('#warningMessage');


	if (username !== '' && phonenumber !== '' && school !== ''){
		// var url = 'http://localhost:3000/account/settings';
		var url = 'http://i6.cims.nyu.edu:17367/account/settings';
		var req= new XMLHttpRequest();
		req.open('POST', url, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send('newUsername=' + username +'&phonenumber=' + phonenumber + '&school=' + school);
		$(function () {
   			$('.modal').modal('hide');
		});
		location.reload();
	} else {
		warning.classList.remove('hidden');
	}
}