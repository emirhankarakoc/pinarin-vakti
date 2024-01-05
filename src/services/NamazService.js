import axios from 'axios';

export default class NamazService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://backend-namaz.onrender.com',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         // Add the allowed origin
      },
    });
  }

  async getAll(sehirIsmi) {
    try {
      const response = await this.api.get(`/getAll/${sehirIsmi}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
