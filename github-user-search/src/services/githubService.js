import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  });
  return response.data;
}

export async function searchUsers(username = "", location = "", minRepos = "") {
  const parts = [];
  if (username) parts.push(username);
  if (location) parts.push(`location:${location}`);
  if (minRepos) parts.push(`repos:>${minRepos}`);

  const q = encodeURIComponent(parts.join(" "));
  const response = await axios.get(`${BASE_URL}/search/users?q=${q}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
    },
  });
  return response.data.items || [];
}
