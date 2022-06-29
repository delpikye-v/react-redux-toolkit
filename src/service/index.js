import axios from "axios";

export const ApiKey = "YOUR_KEY"

class AppService {
  register() {
    axios.defaults.baseURL = "https://api.themoviedb.org";
  }
}

export default new AppService();
