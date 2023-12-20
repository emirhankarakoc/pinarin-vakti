import axios from "axios";
import { API } from "../config";

export default class NamazService {
  constructor() {}

  async getAll(sehirIsmi) {
    return await axios.get(API + "getAll/" + sehirIsmi);
  }
}
