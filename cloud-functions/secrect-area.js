exports.handler = function (event, context, callback) {
	const secretContent = `
		<h3>Welcome To tThe Secret Area</h3>
		<p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two is equal four.</p>
	`;

	let body;

	if (event.body) {
		body = JSON.parse(event.body);
	} else {
		body = {};
	}

	if (body.password == 'javascript') {
		callback(null, {
			statusCode: 200,
			body: 'Welcome to the super secret area'
		});
	} else {
		callback(null, {
			statusCode: 401
		});
	}
};
