export interface Route {
    to: string,
    path:string,
    Component: () => JSX.Element, 
    name: string
}

export interface Main {
    loading:      Boolean;
    status:       string;
    articles:     Article[];
}

export interface Article {
    author:      null | string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: string;
    content:     string;
}

export interface Source {
    id:   null | string;
    name: string;
}
 

export interface OptionsFecha {
    weekday:    string;
    year:       string;
    month:      string;
    day:        string;
    hour:       string;
    minute:     string;
}