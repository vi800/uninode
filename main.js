const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

let id = 431;

app.get('/', (req, res) => {
	res.send('<a href = /show-details>Show Details</a> <a href = /episodes>Episodes</a>')
})

app.listen(port, () => {
	console.log(`Listening port ${port}`)
})

// function getId()
// {
// 	axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends').then((res) => {
// 		id = res.data.id;
// 	});
// }

app.get('/show-details', (req, res) => {
	axios.get(`https://api.tvmaze.com/shows/${id}`).then((data) => {
		res.send(data.data);
	})
})

app.get('/episodes', (req, res) => {
	axios.get(`https://api.tvmaze.com/shows/${id}/episodes`).then((data) => {
		res.send(data.data);
	})
})
