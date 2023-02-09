import React, { useEffect, useState } from 'react';
import { useArticle } from '../../hook/use-news';

const classes = {
    slider: 'slider',
    image:  'slider__article-img',
    title:  'slider__article-title',
    icons:  'slider__icons',
    button: 'slider__icons button',
    dot:    'slider__icons--dot',
    currentColor:'current-color',
    size:   'size',
    loaded: 'slider__article-img loaded'
}

export const Slider = () => {
    const {listArticles} = useArticle();
    const [currentArticle, setCurrentArticle] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const selectedArticle = (next: boolean) => {
        setLoaded(false)
        const condition = next ? currentArticle === listArticles.length - 1 : currentArticle === 0;
        const newIndex = next ? condition ?  0 : currentArticle + 1 :  condition ? listArticles.length - 1 : currentArticle - 1;
        setCurrentArticle(newIndex);
    }
    
    const next = () => {
        selectedArticle(true)
    }

    const previous = () => {
        selectedArticle(false)
    }

    const goToSlide = (index: number) => {
        setCurrentArticle(index)
    }

    useEffect(() => {
        const interval = setInterval(() =>{
            selectedArticle(true)
        }, 10000);
        return () => clearInterval(interval)
    });

    return (
        <div className={classes.slider}>
            <div>
                <img src={listArticles[currentArticle]?.urlToImage} className={loaded ? classes.loaded : classes.image} alt={listArticles[currentArticle]?.title} onLoad={() => setLoaded(true)}/>
                <h1 itemProp='title' className={classes.title}>{listArticles[currentArticle]?.title}</h1>
            </div>
            <div className={classes.icons}>
                <button type='button' onClick={previous} className={classes.button}>
                    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2359 28.4331L1.47481 16.6536C1.19739 16.3976 1.00135 16.1201 0.886685 15.8214C0.770171 15.5226 0.711914 15.2025 0.711914 14.8611C0.711914 14.5197 0.770171 14.1996 0.886685 13.9008C1.00135 13.6021 1.19739 13.3246 1.47481 13.0686L14.2359 1.28905C14.7445 0.819575 15.3918 0.584839 16.1779 0.584839C16.9639 0.584839 17.6112 0.819575 18.1198 1.28905C18.6284 1.75852 18.8827 2.35603 18.8827 3.08158C18.8827 3.80713 18.6284 4.40465 18.1198 4.87412L7.30055 14.8611L18.1198 24.8481C18.6284 25.3175 18.8827 25.9151 18.8827 26.6406C18.8827 27.3662 18.6284 27.9637 18.1198 28.4331C17.6112 28.9026 16.9639 29.1374 16.1779 29.1374C15.3918 29.1374 14.7445 28.9026 14.2359 28.4331Z" fill="black"/>
                    </svg>
                </button>
                <div itemProp='dataSet' className={classes.dot}>
                    {
                        listArticles.map((item, index)=> {
                        return (
                            <button  key={item.title} onClick={() => goToSlide(index)} className={classes.button} >
                                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.size}>
                                    <circle cx="13.0919" cy="13.3004" r="12.8038" fill="#D9D9D9" className={currentArticle === index ? classes.currentColor : '' }/>
                                </svg>
                            </button>
                        )
                        })
                    }
                </div>
                <button type='button' onClick={next} className={classes.button}>
                    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.48164 28.3846C0.973047 27.9151 0.71875 27.3176 0.71875 26.592C0.71875 25.8665 0.973047 25.269 1.48164 24.7995L12.3009 14.8125L1.48164 4.82553C0.973047 4.35606 0.71875 3.75855 0.71875 3.033C0.71875 2.30745 0.973047 1.70994 1.48164 1.24046C1.99024 0.770991 2.63754 0.536255 3.42356 0.536255C4.20957 0.536255 4.85687 0.770991 5.36547 1.24046L18.1266 13.02C18.404 13.2761 18.601 13.5535 18.7175 13.8522C18.8322 14.151 18.8895 14.4711 18.8895 14.8125C18.8895 15.1539 18.8322 15.474 18.7175 15.7728C18.601 16.0716 18.404 16.349 18.1266 16.605L5.36547 28.3846C4.85687 28.854 4.20957 29.0888 3.42356 29.0888C2.63754 29.0888 1.99024 28.854 1.48164 28.3846Z" fill="black"/>
                    </svg>
                </button>
            </div>
        </div>            
    )
}