const express = require('express');
const app = express();
const routes = require('./routes/routes');
const controller = require('./controllers/controller');
const port = 3000;

async function initialize()
{
	try {
		await controller.getId();
		app.use('/', routes);

		app.listen(port, () => {
			console.log(`Running on port ${port}`)
		})
	} catch(err) {
		console.log('Cannot find the id');
		process.exit(1);
	}
}

initialize();
