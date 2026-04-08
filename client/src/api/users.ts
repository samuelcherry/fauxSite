
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getAllUsers() {
	console.log("url: ", API_BASE_URL)
	const response = await fetch(`${API_BASE_URL}/users`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	if (!response.ok) {
		console.log("in error: ", response)
		throw new Error("Failed to fetch users");
	}
	return response.json();
}
