import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function ThanksPage() {
    return (
        <div className="site-content">
            <Head>
                <title>Macramar</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossorigin="anonymous"
                />
                <meta name="description" content="Aprenda Macramê em apenas uma aula com o curso da MacramêAteliê." />
                <meta name="keywords" content="macrame,aprenda macrame,aula gratis, " />
                <meta name="robots" content="index, follow" />

            </Head>

            <section className="container-fluid">
                <div className="container">
                    <h1 className={`${styles.primaryColor}`}>Obrigado</h1>
                </div>
            </section>

            <footer className="container">
                <p className={`${styles.primaryColor} text-center`}>Copyright © 2021 Thamiris Nunes - Todos os direitos reservados  </p>

                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossorigin></script>

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin></script>

                <script>var Alert = ReactBootstrap.Alert;</script>
            </footer>
        </div >
    )
}
