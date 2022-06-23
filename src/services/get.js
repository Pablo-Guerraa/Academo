import axios from "axios";

const get = async(url) => {
  const respond = await axios.get(url);
  const data = respond.data;
  return data;
};

export default get;