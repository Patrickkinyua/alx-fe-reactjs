import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch a single user by username
export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  });
  return response.data;
}
