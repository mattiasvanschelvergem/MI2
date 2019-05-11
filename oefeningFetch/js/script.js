;(function(){
	"use strict";

	let artist = document.querySelector('#artist');
	let song = document.querySelector('#song');
	let btnSearch = document.querySelector('#btnSearch');
	let songs = document.querySelector('#songs');
	let tooltip = document.querySelector('#tooltip');


	function handleError(err) {
		console.log('Request failed', err)
	}
	function handleResponse(resp) {
		console.log('response status: ', resp.status);
		return resp.json();
	}
	function handleSuccess(data) {
		console.log(data);
	}

	btnSearch.addEventListener('click', function() {
		let url = 'https://www.songsterr.com/a/ra/byartists.json?artists=bono';
		fetch(url)
		.then(handleResponse)
		.then(handleSuccess)
		.catch(handleError);
	});
})();

/*
let url = 'https://www.songsterr.com/a/ra/songs.json?pattern';
	let artist = document.querySelector('#artist');
	let song = document.querySelector('#song');
	let btnSearch = document.querySelector('#btnSearch');
	let songs = document.querySelector('#songs');
	let tooltip = document.querySelector('#tooltip');


	function handleError(err) {
	    console.log('Request failed', err)
	}
	function handleResponse(resp) {
	  console.log('response status: ', resp.status);
	  return resp.json();
	}
	function handleSuccess(data) {
    	console.log(data);
	  console.log('status: ', data.status);
	  console.log('image received: ', data.message);
	  songs.innerHTML.src = data.message;
	}

	document.querySelector('#btnSearch').addEventListener('click', function() {
		fetch(url)
			.then(handleResponse)
			.then(handleSuccess)
			.catch(handleError);
	});
	*/
