import API from "../api";

// Create chat
export const createChat = (participants) =>
  API.post("/chat", { participants });

// Get chats of user
export const getUserChats = (userId) =>
  API.get(`/chat/${userId}`);


