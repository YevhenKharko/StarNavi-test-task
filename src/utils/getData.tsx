import axios from 'axios';
import { ResponseType } from '../types/ResponseType';

const API_URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

export const getData = async (): Promise<ResponseType[]> => {
  try {
    const response = await axios.get(API_URL);

    if (!response.data) {
      throw new Error('Failed to fetch data');
    }

    const data: ResponseType[] = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};