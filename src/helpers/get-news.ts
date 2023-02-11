import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const baseUrl = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=${apikey}`;


export const getNews = async(category:string = 'general',pageSize:number=20, query:string = '') => {
    if(query) {
        return axios.get(baseUrl,{
            params:{
                language:'en',
                apikey:apikey,
                q:query
            }

        }).then(({ data }) => {
            return data.articles;
        }).catch ( (err) => console.log(err))
    }else {
        return axios.get(baseUrl,{
            params:{
                language:'en',
                apikey:apikey,
                category,
                pageSize
            }
        }).then(({ data }) => {
            return data.articles;
        }).catch(err => console.log(err))
    }
}