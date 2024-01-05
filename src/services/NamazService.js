import axios from 'axios';

export default class NamazService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*', // Add the allowed origin
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
