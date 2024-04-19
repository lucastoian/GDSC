import axios from "axios";
let baseUrlApi = "/cards";

class CardsApi {
  async fetchAllByPage(pi, ps) {
    //?checkAccount=${checkAccount}
    let url = `${baseUrlApi}/all?pi=${pi}&ps=${ps}`;
    return axios.get(url);
  }

  async fetchAll() {
    //?checkAccount=${checkAccount}
    let url = `${baseUrlApi}/all`;
    return axios.get(url);
  }

  async getAmount(expansion_id) {
    //?checkAccount=${checkAccount}
    let url = `${baseUrlApi}all?expansion_id=${expansion_id}`;
    return axios.get(url);
  }
}

export default new CardsApi();
