const submitBtn = document.getElementById('form-button');
const userName = document.getElementById('user-name');

submitBtn.addEventListener('click', function() {
	document.getElementById('user-message').innerHTML = userName.value;
});