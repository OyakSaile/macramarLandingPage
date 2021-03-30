import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../components/Form/Form'
export default function Home() {
  return (
    <div className="site-content">
      <Head>
        <title>Thamiris Nundes - Aprenda Macramê como um profissional.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <meta name="description" content="Thamiris Nunes, Aprenda macramê como um profissional, aula totalmente grátis e 100% online." />
        <meta name="keywords" content="macrame,aprenda macrame,aula gratis, " />
        <meta name="robots" content="index, follow" />

      </Head>

      <section>
        <Image priority={true} src="/images/banner.png" width={1920} height={1000} alt="Imagem da Fundadora do MacramêAteliê"></Image>

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
            <Form />
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

      <section className={`container-fluid aboutMe`}>
        <div className={`container`}>
          <div className="row">
            <hr />
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-xl-12 text-center">
              <h3 className={`${styles.primaryColor} font-weight-bold`}>Thamiris Nunes</h3>
              <p>
                Me chamo Thamiris e tenho 24 anos, sou artesã e fundadora da <a href="" className={`${styles.primaryColor}`}>@macramar.atelie.</a> Hoje me dedico 100% ao macramê, por isso digo que essa arte transformou a minha vida e a cada dia venho me apaixonando por essa profissão e estilo de vida. <br /> <br /> Fiz meu primeiro painel, fiquei tão orgulhosa e feliz que não queria parar mais, foi quando resolvi que essa seria minha vida, e atualmente essa é a minha profissão e toda minha fonte de renda, por isso eu resolvi dividir com você parte da minha história e experiência na busca pelo aprendizado do macramê. Conversaremos as soluções e dicas que aprendi na prática, com muito estudo, esforço e dedicação.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <h1 className={`${styles.primaryColor} font-weight-bold`}>Aprenda Macramê</h1>
          <h3 className={`font-weight-bold ${styles.tertiaryColor}`}>Como um profissional</h3>
          <h4 className={`font-weight-bold ${styles.tertiaryColor}`}>Dia 15 de Abril</h4>
          <Form />



          <div className="input-block">


          </div>
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
