var postId;
document.addEventListener("DOMContentLoaded", init);

function init(){
	$(document).on("click", ".open-edit", function () {
	     postId = $(this).data('id');
	});
	$(document).on("click", ".open-delete", function () {
	    postId = $(this).data('id');
	});

	var updateBtn = document.querySelector('#updateBtn');
	updateBtn.addEventListener('click', function(evt){
		updatePost(evt);
	});

	var deleteBtn = document.querySelector('#deleteBtn');
	deleteBtn.addEventListener('click', function(evt){
		deletePost(evt);
		location.reload();
	});


}
function updatePost(evt){
	evt.preventDefault();
	var title = document.querySelector('#updateTitle').value;
	var description = document.querySelector('#updateDescription').value;
	var warning = document.querySelector('#warningMessage');

	if (title !== '' && description !== ''){
		// var url = 'http://localhost:3000/api/post/update';
		var url = 'http://i6.cims.nyu.edu:17367/api/post/update';
		var req= new XMLHttpRequest();
		req.open('POST', url, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send('postTitle=' + title +'&postDescription=' + description + '&postId=' + postId);
		$(function () {
   			$('.modal').modal('hide');
		});
		location.reload();
	} else {
		warning.classList.remove('hidden');
	}
}

function deletePost(evt){
	evt.preventDefault();
	$(function () {
   		$('.modal').modal('hide');
	});
	// var url = 'http://localhost:3000/api/post/delete';
	var url = 'http://i6.cims.nyu.edu:17367/api/post/delete';
	var req= new XMLHttpRequest();
	req.open('DELETE', url, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send('postId=' + postId);
}
