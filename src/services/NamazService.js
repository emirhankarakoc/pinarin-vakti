import axios from 'axios';

export default class NamazService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://deneme-6mf0.onrender.com/getAll/baku',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin: https://pv-front-emirhankarakoc.vercel.app' // Add the allowed origin
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
