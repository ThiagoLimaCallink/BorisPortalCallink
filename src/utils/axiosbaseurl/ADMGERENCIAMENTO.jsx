import axios from "axios";

const ADM_Gerenciamento = axios.create({
  baseURL:
    "https://southamerica-east1-biclk-203418.cloudfunctions.net/ADM_Gerenciamento",
});

export default ADM_Gerenciamento;
