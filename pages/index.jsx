import Head from 'next/head'
import Image from 'next/image'
import { FaArrowRight, FaTicketAlt } from 'react-icons/fa'
import styles from '../styles/Home.module.css'


export default function Home() {
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


      </Head>

      <section className="container-fluid mt-5">
        <div className="container">


          <div className="row">
            <div className="col-12 col-md-6 col-xl-6">
              <div className={styles.headerText}>


                <h2 className={`font-weight-bold ${styles.tertiaryColor}`}  >Aula de</h2>
                <h1 className={`${styles.primaryColor} font-weight-bold`}>Macramê</h1>
                <h3 className={`font-weight-bold ${styles.tertiaryColor}`}>Dia 15 de Abril</h3>
                <p>Evento totalmente gratuito</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-6">

              <Image src="/images/headerimage.png" width={1000} height={700}></Image>


            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid my-5">
        <div className="container">


          <div className="row">
            <h2 className={`font-weight-bold ${styles.tertiaryColor} ${styles.carrerText} text-center my-3`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet  Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet</h2>
          </div>

          <div className="row text-center">
            <p className={`${styles.primaryColor} font-weight-bold ${styles.carrerText}`}>Construa sua carreira lançando especialistas no mercado on-line como um profissional de bastidores disputado e bem remunerado.</p>
          </div>

          <div className="row">
            <form action="" className={`${styles.formStyle} w-100`}>


              <input className="d-block my-3" name="name" type="text" placeholder="Insira o seu nome." />



              <input name="email" type="text" placeholder="Seu melhor e-mail." />


              <button className={`btn  ${styles.primaryColorBg} my-3`} type="submit">Garantir minha vaga
              <FaArrowRight />
              </button>


            </form>
          </div>
        </div>

      </section>

      <section className={`container-fluid ${styles.bgGrey} container-courses`}>
        <div className="container">


          <div className={`text-center ${styles.textsCourse} pt-5  `}>
            <h2 className={styles.lightColor}>Lorem Impsum</h2>
            <h3 className={`${styles.primaryColor}`} > <strong>100% Gratuito</strong></h3>
            <h3 className={`${styles.primaryColor}`} ><strong>100% Online</strong></h3>
            <p className={styles.lightColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque, veniam perspiciatis tenetur temporibus eum voluptatibus animi ex aliquam nisi eius, sint delectus labore aspernatur explicabo unde reprehenderit non odio.
            Quidem atque ut cupiditate? Deserunt voluptates eius repellendus corrupti qui inventore fuga veritatis voluptatem tempora doloremque voluptatum maiores vitae totam veniam omnis, similique facilis excepturi alias cumque vero aliquam vel.
            Saepe, atque! Dolorum modi quasi, perferendis voluptatibus minus ipsam assumenda, .</p>

          </div>
        </div>
      </section>

      {/* <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-4 col-md-4">
              <div className={`${styles.cardEvent} d-flex`}>
                <FaTicketAlt />
                <h3>Evento Gratuito</h3>
              </div>

            </div>
            <div className="col-12 col-xl-4 col-md-4">
              <div className={`${styles.cardEvent} d-flex`}>
                <FaTicketAlt />
                <h3>Evento Gratuito</h3>
              </div>

            </div>
            <div className="col-12 col-xl-4 col-md-4">
              <div className={`${styles.cardEvent} d-flex`}>
                <FaTicketAlt />
                <h3>Evento Gratuito</h3>
              </div>

            </div>


          </div>

        </div>
      </div> */}


      <footer>


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
