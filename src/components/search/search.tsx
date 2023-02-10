import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hook/useFom';

const classes = {
    search:     'search',
    inputSearch:'search__input-search',
    btnSearch:  'search__btn-search',
}

interface FormData {
    valueSearch:string;
}

export const FormNews = () => {

    const { valueSearch, onInputChange, onResetForm} = useForm<FormData>({
        valueSearch:'',
    });

    const navigate = useNavigate();
    
	const onSearchSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search/?query=${valueSearch.trim().toLocaleLowerCase().replaceAll(' ', '+')}`)
		onResetForm();
	};

    return (
        <form 
            className={classes.search}
            onSubmit={onSearchSubmit}
        >
            <input
                className={classes.inputSearch} 
                type="text" 
                placeholder='Search' 
                name='valueSearch'
                autoComplete='off'
                size={50}
                value={valueSearch}
                onChange={onInputChange}
                />
            <button 
                type='submit' 
                className={classes.btnSearch}
            >
                <svg 
                    focusable="false" 
                    viewBox="0 0 24 24" 
                    width={25} 
                    height={25} 
                    fill="#fff">
                    <path 
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                    </path>
                </svg>
            </button>
        </form>
    )
}
