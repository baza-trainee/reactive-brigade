export const fetchAccountBalance = async () => {
	try {
		const response = await fetch(import.meta.env.VITE_API_URL, {
			method: 'GET',
			headers: {
				'X-Token': import.meta.env.VITE_API_KEY,
			},
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
