import axios from 'axios';

export default class NamazService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://three-k6az.onrender.com',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         // Add the allowed origin
      },
    });
  }

  async getAll(sehirIsmi) {
    try {
      const response = await this.api.get(`/getToday/${sehirIsmi}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
