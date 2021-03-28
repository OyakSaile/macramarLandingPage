import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import styles from './Form.module.css'
const axios = require('axios')


function Form() {




    console.log(handleRegister)
    return (
        <form className={`${styles.formStyle} w-100`} action="https://gmail.us1.list-manage.com/subscribe/post?u=5ae2ce452370c52c253ad0cf3&amp;id=697427cdf6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" onSubmit={handleRegister}>

            <label htmlFor="nome"></label>
            <input required id="nome" className="d-block my-3" type="text" placeholder="Insira o seu nome." />


            <label htmlFor="email"></label>
            <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Insira o seu melhor e-mail" required />


            <button className={`btn  ${styles.primaryColorBg} my-3`} type="submit">Garantir minha vaga
                     <FaArrowRight />
            </button>


        </form>
    )
}

export default Form;