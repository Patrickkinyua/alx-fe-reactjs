import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username) {
  try {
    console.log('Fetching user data for:', username);
    
    // Create headers object
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'GitHub-User-Search-App'
    };
    
    // Only add authorization if API key is available
    const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
    if (apiKey) {
      headers.Authorization = `token ${apiKey}`;
      console.log('Using API key for authentication');
    } else {
      console.log('Using public API (no authentication)');
    }

    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers,
      timeout: 10000,
    });
    
    console.log('API response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    
    // Handle specific error cases
    if (error.response?.status === 404) {
      throw new Error('User not found');
    } else if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your internet connection.');
    } else if (error.response?.status === 0) {
      throw new Error('Network error. Please check your internet connection.');
    } else {
      throw new Error(`Failed to fetch user data: ${error.message}`);
    }
  }
}

export async function searchUsers(username = "", location = "", minRepos = "") {
  try {
    const parts = [];
    if (username) parts.push(username);
    if (location) parts.push(`location:${location}`);
    if (minRepos) parts.push(`repos:>${minRepos}`);

    const q = encodeURIComponent(parts.join(" "));
    
    // Create headers object
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'GitHub-User-Search-App'
    };
    
    // Only add authorization if API key is available
    const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
    if (apiKey) {
      headers.Authorization = `token ${apiKey}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?q=${q}`, {
      headers,
      timeout: 10000,
    });
    
    return response.data.items || [];
  } catch (error) {
    console.error('Error searching users:', error);
    
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your internet connection.');
    } else {
      throw new Error('Failed to search users. Please try again.');
    }
  }
}
