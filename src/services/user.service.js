import axios from "axios";

class UserService {
  API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  static getUserInfo() {
    console.log(API);
  }
}
export default UserService;
