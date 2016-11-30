document.addEventListener("DOMContentLoaded", init);

function init(){
	console.log('in script');
	var addPostBtn = document.querySelector('#addPost');
	addPostBtn.addEventListener('click', function(evt){
		addPost(evt);
		window.location = "http://localhost:3000/home/posts";
	});
}
function addPost(evt){
	evt.preventDefault();
	var title = document.querySelector('#postTitle').value;
	var description = document.querySelector('#postDescription').value;
	var src = document.querySelector('#postSrc').value;

	var url = 'http://localhost:3000/api/post/create';
	var req= new XMLHttpRequest();
	req.open('POST', url, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send('postTitle=' + title +'&postDescription=' + description + '&postSrc=' + postSrc);
}
