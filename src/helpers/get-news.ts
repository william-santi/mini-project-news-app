import axios from 'axios';
import { Main } from '../interface/interface';

const apikey = '623686037cc046d9a78384bafee97a78';
const baseUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apikey}`;

export const getNews = async(category:string = 'general',pageSize:number=20, query:string = '') => {
    if(query) {
        return axios.get(baseUrl,{
            params:{
                language:'en',
                apikey:apikey,
                q:query
            }
        }).then(({data}:{data:Main}) => {
            return data.articles;
        }).catch( e => {
            console.log(e)
            return []
        })
    }else {
        return axios.get(baseUrl,{
            params:{
                language:'en',
                apikey:apikey,
                category,
                pageSize
            }
        }).then(({data}:{data:Main}) => {
            return data.articles;
        }).catch( e => {
            console.log(e)
            return []
        })
    }
}