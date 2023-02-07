import axios from 'axios';

const apikey = '1101235405a64588a1e46858f8c3a8eb'
const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`

export const getNews = async(category:string = 'general',pageSize:number=20, query:string = '') => {
    if(query) {
        return axios.get(baseUrl,{
            params:{
                language:'en',
                apikey:apikey,
                q:query
            }
        }).then(({data}:{data:any}) => {
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
        }).then(({data}:{data:any}) => {
            return data.articles;
        }).catch( err => console.log(err))
    }
}