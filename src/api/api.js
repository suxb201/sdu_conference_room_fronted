import axios from "axios";
const DEV_URL = "http://room-test.vkzot.com:5001";
const TEST_URL =
  "http://mock.eolinker.com/6GCMy2F31b27b64cc14eb5b00b0b772a9128905503771d8?uri=";
const BAD_URL = "http://127.0.0.1:5001";
const url = BAD_URL;
axios.defaults.withCredentials = true;
export function post(backUrl, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url + backUrl, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
    // console.log("this");
  });
}
export function get(backUrl, data) {
  // console.log(data)
  return new Promise((resolve, reject) => {
    axios
      .get(url + backUrl, {
        params: { ...data }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
}
