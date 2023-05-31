import axios from "axios";

const ADM_RELATORIO_CALLINK = axios.create({
  baseURL:
    "https://southamerica-east1-biclk-203418.cloudfunctions.net/Gera_Relatorio_Callink",
});

export default ADM_RELATORIO_CALLINK;
