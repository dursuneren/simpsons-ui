import axios from "axios";

class SimpsonsService {
  async getSimpsons() {
    return axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons");
  }
}

export default new SimpsonsService();
