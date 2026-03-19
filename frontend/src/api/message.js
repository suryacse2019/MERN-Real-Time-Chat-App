import API from "../api";

// Send message
export const sendMessage = (data) =>
  API.post("/message", data);

// Get messages
export const getMessages = (chatId) =>
  API.get(`/message/${chatId}`);

