import axios from 'axios';

export default class NamazService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8081',
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
