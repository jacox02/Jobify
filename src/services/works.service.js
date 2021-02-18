const axios = require("axios");

class WorkService {
  getAllWorks() {
    return axios.get("/Works/List").then((response) => {
      return response.data;
    });
  }
  getWorkDetails(id) {}
  getOwnJobs(ownerMail) {}
  getWorksByCat(catId) {}

  createWork() {}

  updateWork(id, newData) {}

  deleteWork(id, ownerMail) {}

  searchJobBy(searchParam) {}
}

export default new WorkService();
