import { ResponseType } from '../types/ResponseType';

export const getData = async (): Promise<ResponseType[]> => {
  try {
    const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: ResponseType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};