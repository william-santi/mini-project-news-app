import React from 'react';
import { NavLink } from 'react-router-dom';

const classes = {
    footer:         'footer',
    section:        'footer__section',
    title:          'footer__title',
    paragraph:      'footer__paragraph',
    links:          'footer__section-links item',
    socialMedia:    'footer__section-social-media',
    form:        'footer__section-form',
    inputContainer: 'input__container',
    inputContent:   'input__content',
    button:         'footer__button',
    premium:        'footer__section-premium',
}

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <section className={classes.section}>
                <div>
                    <h1 itemProp='news-app' className={classes.title}>News App</h1>
                    <ul className={classes.links}>
                        <li><NavLink to='/'>HomePage</NavLink></li>
                        <li><NavLink to='/news'>News</NavLink></li>
                        <li><NavLink to='/'>Last minute</NavLink></li>
                        <li><NavLink to='/'>Terms and Condition</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h2 itemProp='category' className={classes.title}>Category</h2>
                    <ul className={classes.links}>
                        <li><NavLink to='/health'>Health</NavLink></li>
                        <li><NavLink to='/entertaiment'>Entertaiment</NavLink></li>
                        <li><NavLink to='/sports'>Sports</NavLink></li>
                        <li><NavLink to='/tecnology'>Tecnology</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h2 itemProp='social-media' className={classes.title}>Follow us</h2>
                        <div className={classes.socialMedia}>
                            <a href='http://twitter.com' target="_blank" rel="noreferrer">
                                <svg width="29" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.6895 4.39429H5.18555C4.54816 4.39429 4.0332 4.90924 4.0332 5.54663V32.0505C4.0332 32.6879 4.54816 33.2029 5.18555 33.2029H31.6895C32.3268 33.2029 32.8418 32.6879 32.8418 32.0505V5.54663C32.8418 4.90924 32.3268 4.39429 31.6895 4.39429ZM26.1906 14.8266C26.2014 14.9958 26.2014 15.1723 26.2014 15.3452C26.2014 20.6315 22.1754 26.7209 14.8184 26.7209C12.5497 26.7209 10.4467 26.062 8.67499 24.9276C8.99908 24.9636 9.30878 24.978 9.64008 24.978C11.5126 24.978 13.2339 24.3442 14.606 23.2711C12.8486 23.2351 11.3722 22.0828 10.868 20.4983C11.4838 20.5883 12.0384 20.5883 12.6722 20.4263C11.7673 20.2424 10.954 19.751 10.3704 19.0355C9.78685 18.3199 9.46898 17.4244 9.47083 16.5011V16.4507C10.0002 16.7496 10.6232 16.9332 11.275 16.9584C10.727 16.5933 10.2777 16.0985 9.96673 15.5181C9.65579 14.9377 9.49288 14.2895 9.49243 13.631C9.49243 12.8856 9.68689 12.205 10.0362 11.6144C11.0405 12.8508 12.2938 13.862 13.7146 14.5823C15.1353 15.3026 16.6917 15.7159 18.2827 15.7953C17.7173 13.0765 19.7483 10.8762 22.1898 10.8762C23.3422 10.8762 24.3793 11.3588 25.1103 12.1366C26.0142 11.9673 26.8784 11.6288 27.649 11.1751C27.3502 12.1006 26.7236 12.882 25.8917 13.3754C26.6984 13.2889 27.4762 13.0657 28.1964 12.7524C27.6526 13.5518 26.972 14.2612 26.1906 14.8266Z" fill="#FFFDFD"/>
                                </svg>
                            </a>
                            <a href='http://instagram.com' target="_blank" rel="noreferrer">
                                <svg width="29" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3076 18.7986C23.3076 19.7102 23.0373 20.6014 22.5308 21.3594C22.0243 22.1174 21.3044 22.7082 20.4622 23.0571C19.6199 23.406 18.6931 23.4972 17.799 23.3194C16.9049 23.1415 16.0836 22.7025 15.4389 22.0579C14.7943 21.4133 14.3553 20.592 14.1774 19.6978C13.9996 18.8037 14.0909 17.8769 14.4397 17.0347C14.7886 16.1924 15.3794 15.4725 16.1374 14.966C16.8954 14.4595 17.7866 14.1892 18.6982 14.1892C19.9196 14.193 21.0898 14.6799 21.9534 15.5435C22.817 16.4071 23.3038 17.5773 23.3076 18.7986ZM33.1025 12.4607V25.1365C33.1025 27.2758 32.2527 29.3275 30.7399 30.8403C29.2272 32.353 27.1755 33.2029 25.0361 33.2029H12.3604C10.221 33.2029 8.16929 32.353 6.65654 30.8403C5.1438 29.3275 4.29395 27.2758 4.29395 25.1365V12.4607C4.29395 10.3213 5.1438 8.26963 6.65654 6.75688C8.16929 5.24414 10.221 4.39429 12.3604 4.39429H25.0361C27.1755 4.39429 29.2272 5.24414 30.7399 6.75688C32.2527 8.26963 33.1025 10.3213 33.1025 12.4607ZM25.6123 18.7986C25.6123 17.4311 25.2068 16.0943 24.4471 14.9573C23.6873 13.8203 22.6075 12.9341 21.3441 12.4108C20.0808 11.8875 18.6906 11.7506 17.3494 12.0174C16.0082 12.2842 14.7762 12.9427 13.8093 13.9096C12.8423 14.8766 12.1838 16.1085 11.917 17.4497C11.6503 18.7909 11.7872 20.1811 12.3105 21.4445C12.8338 22.7079 13.72 23.7877 14.857 24.5474C15.994 25.3071 17.3308 25.7126 18.6982 25.7126C20.532 25.7126 22.2906 24.9842 23.5872 23.6876C24.8839 22.3909 25.6123 20.6323 25.6123 18.7986ZM27.917 11.3083C27.917 10.9665 27.8156 10.6323 27.6257 10.348C27.4358 10.0638 27.1658 9.84224 26.8499 9.71141C26.5341 9.58058 26.1866 9.54635 25.8513 9.61305C25.516 9.67974 25.208 9.84437 24.9662 10.0861C24.7245 10.3278 24.5599 10.6358 24.4932 10.9711C24.4265 11.3064 24.4607 11.654 24.5915 11.9698C24.7224 12.2857 24.9439 12.5556 25.2282 12.7456C25.5124 12.9355 25.8466 13.0369 26.1885 13.0369C26.6469 13.0369 27.0866 12.8548 27.4107 12.5306C27.7349 12.2064 27.917 11.7668 27.917 11.3083Z" fill="white"/>
                                </svg>
                            </a>
                            <a href='http://facebook.com' target="_blank" rel="noreferrer">
                                <svg width="25" height="34" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_425_59)">
                                <path d="M28.8707 14.8862C28.8707 6.91659 22.4498 0.456299 14.5304 0.456299C6.60738 0.458091 0.186523 6.91659 0.186523 14.888C0.186523 22.0886 5.43148 28.0577 12.2861 29.1404V19.0574H8.64729V14.888H12.2897V11.7062C12.2897 8.0907 14.4318 6.09382 17.7068 6.09382C19.277 6.09382 20.9172 6.37525 20.9172 6.37525V9.92447H19.1085C17.3285 9.92447 16.7728 11.0376 16.7728 12.1795V14.8862H20.7487L20.1141 19.0556H16.7711V29.1386C23.6257 28.056 28.8707 22.0868 28.8707 14.8862Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_425_59">
                                <rect width="28.6806" height="28.6806" fill="white" transform="translate(0.191406 0.458252)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </a>
                        </div>
                </div>
                <div className={classes.premium}>
                    <h2 itemProp='Premium' className={classes.title}>Premium</h2>
                    <p className={classes.paragraph}>Subscribe for more news</p>
                    <div className={classes.form}>
                        <div className={classes.inputContainer}>
                            <input className={classes.inputContent} placeholder='Email'/>
                        </div>
                        <button className={classes.button}>Suscribete</button>
                    </div>
                </div>

            </section>
        </footer>
    )
}