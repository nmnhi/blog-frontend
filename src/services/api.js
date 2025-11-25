// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export async function getBlogs() {
  const res = await fetch(`${API_URL}/blogs`);
  return res.json();
}
