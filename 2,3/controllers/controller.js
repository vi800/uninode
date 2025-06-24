const axios = require('axios');

let id;

getId = async() => {
	let res = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends');
	id = res.data.id;
}

const home = (req, res) => {
	  res.send('/show-details to get all the details of the show\n/episodes to get all the episodes');
}

const showDetails = async (req, res) => {
  try {
	  res.send((await axios.get(`https://api.tvmaze.com/shows/${id}`)).data);
  } catch(err) {
    console.log('Cannot fetch details at the moment');
  }
}

const episodes = async (req, res) => {
  try {
	  res.send((await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)).data)
  } catch(err) {
    console.log('Cannot fetch episodes at the moment');
  }
}

module.exports = {
	getId, home, showDetails, episodes
}
