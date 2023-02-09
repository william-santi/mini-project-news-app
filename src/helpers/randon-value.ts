import { Article } from "../interface/interface";

export const RandonValue = (articles: Article[] = []) => {

    const values: Article[] = []
    
    for (let i = 0; i < 3; i++) {
        const a = Math.floor(Math.random() * articles.length);
        const e = articles[a];
        values.push(e)
    }
    return values
}