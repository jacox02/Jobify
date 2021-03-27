import axios from "axios";
class workService {
  static getConfig() {
    return axios.get(`${process.env.REACT_APP_API_URL}/config`);
  }

  static getWorks(category) {
    return axios.get(`${process.env.REACT_APP_API_URL}/Works/${category}/list`);
  }
  static searchWork(category) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/Works/${category}/list/`
    );
  }
  static getCategories() {
    return axios.get(`${process.env.REACT_APP_API_URL}/Works/Categories`);
  }

  static getWorksFromCat(selectedCat) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/Works/${selectedCat}/List/`
    );
  }
}

export default workService;
