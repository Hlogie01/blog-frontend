import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const addPost = async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post);
  return response.data;
};

export const addComment = async (postId, comment) => {
  const response = await axios.post(`${API_URL}/posts/${postId}/comments`, comment);
  return response.data;
};
