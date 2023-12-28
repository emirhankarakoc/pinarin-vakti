import axios from 'axios';

export default class NamazService {
    async getAll(sehirIsmi) {
        return axios.get("https://deneme-6mf0.onrender.com/getAll/"+sehirIsmi,{ withCredentials: false });
      }
     







  

}