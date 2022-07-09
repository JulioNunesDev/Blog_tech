import axios from "axios";

 const api = axios.create({
    baseURL: `https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${import.meta.env.VITE_SOME_KEY}`
})

export default api

//Criar algumas rotas para as categorias