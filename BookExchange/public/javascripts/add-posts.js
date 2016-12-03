// var production ='http://i6.cims.nyu.edu:17368/api/post/create';
// var local = 'http://localhost:3000/api/post/create';

document.addEventListener("DOMContentLoaded", init);

function init(){
	var addPostBtn = document.querySelector('#addPost');
	addPostBtn.addEventListener('click', function(evt){
		addPost(evt);
		window.location = "http://i6.cims.nyu.edu:17367/home/posts";

		// window.location = "http://localhost:3000/home/posts";
	});
}
function addPost(evt){
	evt.preventDefault();
	var title = document.querySelector('#postTitle').value;
	var description = document.querySelector('#postDescription').value;

	// var url = 'http://localhost:3000/api/post/create';
	var url = 'http://i6.cims.nyu.edu:17367/api/post/create';
	var req= new XMLHttpRequest();
	req.open('POST', url, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send('postTitle=' + title +'&postDescription=' + description);
}
