const backendUrl = 'https://endless-presently-basilisk.ngrok-free.app';

export async function sendText(text: string) {
	const response = await fetch(backendUrl, {
		method: 'POST',
		headers: {
			'accept': 'application/json',
            'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 'text': text }),
	});

	const result = await response.json();
	return result;
};

export async function sendUrl(text: string) {
	const response = await fetch(backendUrl, {
		method: 'POST',
		headers: {
			'accept': 'application/json',
            'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 'url': text }),
	});

	const result = await response.json();
	return result;
};

