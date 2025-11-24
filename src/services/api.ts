import axios from 'axios';
import { API_URL } from '../config/api';
interface SendMessageResponse {
  message: string;
}

export const sendMessage = async (
  name: string,
  email: string,
  message: string,
): Promise<SendMessageResponse> => {
  try {
    const response = await axios.post(`${API_URL}/contact`, {
      name,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    console.log(`Ошибка: ${error}`);
    throw error;
  }
};
