import Head from 'next/head'
import { Inter } from 'next/font/google'
import bmPic1 from '../../../public/assets/bm-pic1.jpg'
import bmPic2 from '../../../public/assets/bm-pic2.jpg'
import bmPic3 from '../../../public/assets/bm-pic3.jpg'
import styles from './styles.module.css'
import Image from 'next/image'

export default function BumMoo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.content}>
        <div className={styles.title}>Sistema Bum Moo</div>
        <span className={styles.text}>
          <p><strong>BUM MOO</strong> Significa arte marcial do tigre.</p>
          <p>O sistema foi desenvolvido pelo <strong>Grão-Mestre Yun Sik Kim</strong> em uma referência à peninsula coreana que possui recorte geográfico parecido com a postura de um tigre.</p>

          <div className={styles.imageGroup}>
            <Image
                className={styles.pic}
                alt="Bum Moo"
                src={bmPic1}
                priority
            />
          </div>

          <p>O método <strong>BUMMOO</strong> representa um estilo forte que utiliza em seu treinamento a força, sagacidade, habilidade, velocidade, estratégia, destreza e coragem que caracterizam o tigre.</p>                    

          <p>Conhecidos por serem animais imponentes e muito perigosos, os tigres fazem parte do grupo de quatro espécies dos grandes felinos, composta também pelos leões, jaguares ou onças-pintadas e leopardos.</p>
          <p>Hábeis caçadores, os tigres contam com enormes mandíbulas, dentes grandes e afiados, andar macio e fortes garras.</p>  
          <p>O tigre representa beleza e graciosidade, além de ser extremamente habilidoso, consegue saltar 9 metros de distância em superfícies planas e quase 5 metros de altura. Seus sentidos, a exemplo da audição e o olfato são muito aguçados.</p>

          <div className={styles.imageGroup}>
            <Image
                className={styles.pic}
                alt="Bum Moo"
                src={bmPic2}
                priority
            />
          </div>

          <p>Caçam principalmente na parte da manhã e no início da noite. A sua visão noturna é seis vezes melhor do que a dos humanos.</p>
          <p>As listras de cada tigre são únicas, assim como as impressões digitais das pessoas.</p>
          <p>Quando vários tigres vão comer uma presa, os machos geralmente deixam as fêmeas e filhotes comerem primeiro, ao contrário dos leões, que fazem o oposto.</p>
          <p>Tigres raramente brigam por uma presa, eles simplesmente esperam sua vez.</p>
          
          <p>As marcas na testa de um tigre se assemelham ao caractere chinês para a palavra "rei", dando aos tigres um status de animal real.</p>
          <p>Os tigres são os maiores felinos encontrados na natureza.</p>
          <p>Os tigres podem correr a mais de 60km/h, em distâncias curtas.</p>
          <p>A musculatura de suas pernas é tão poderosa que pode fazer com que permaneça de pé mesmo depois de morto.</p> 

          <div className={styles.imageGroup}>
            <Image
                className={styles.pic}
                alt="Bum Moo"
                src={bmPic3}
                priority
            />
          </div>

          <p>Ao contrário de quase todos os outros felinos, os tigres são bons nadadores e muitas vezes nadam vários quilômetros para caçar ou atravessar rios.</p>

          <p>Têm uma excelente estratégia de combate.</p>
          <p>O praticante do <strong>BUMMOO</strong> deve conhecer as características do tigre a fim de melhor aperfeiçoar sua forma de combate e defesa aplicando os golpes baseando-se nos movimentos magníficos do Tigre Marcial.</p>
          <p>O representante do sistema <strong>BUMMOO HAPKIDO</strong> na Bahia é o <strong>Mestre Xavier</strong>, aluno direto do <strong>Grão Mestre YUN SIK KIM</strong>.</p>  
        </span>  
        
      </main>
      
    </div>
  )
}
