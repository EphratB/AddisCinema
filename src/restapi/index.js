import axios from "axios";
const key = "23b742318d6967818036cb509af011e4";
const URL = "https://api.themoviedb.org/3/";

export async function read() {
  try {
    const response = await axios.get(
      `${URL}/trending/all/day?api_key=${key}&page=${1}`
    );

    console.log("response", response);
    return {
      sucess: true,
      data: response.data,
    };
  } catch (err) {
    let message;
    const status = err.response?.status;
    switch (status) {
      case 401:
        message = "It failed to authenticate";
        break;

      case 404:
        message = "Server failed";
        break;

      default:
        message = "Unexpected error";
    }
    return {
      sucess: false,
      error: message,
    };
  }
}
