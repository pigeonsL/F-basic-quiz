import axios from "axios";
import baseURL from "./base";

const Resume = {
  resume: async () => {
    return axios.get(`${baseURL}`);
  },
};
export default Resume;