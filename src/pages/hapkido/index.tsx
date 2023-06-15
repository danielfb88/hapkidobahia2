import Head from 'next/head'
import { Inter } from 'next/font/google'
import hkdPic1 from '../../../public/assets/hkd-pic1.jpg'
import hkdPic2 from '../../../public/assets/hkd-pic2.jpg'
import styles from './styles.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Hapkido() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.content}>
        <div className={styles.title}>O que é Hapkido</div>      	
        <span className={styles.text}>
          <p><strong>O Hapkido</strong> (ou Hapkidô) consiste em uma arte marcial sulcoreana especializada em defesa pessoal e táticas de sobrevivência muito utilizadas nos exércitos de vários países como treinamento dos militares.</p>
          <p>O método utiliza técnicas de torçoes, imobilizações, projeções, escapes, esquivas, socos, cotoveladas, chutes, joelhadas, rolamentos, alongamento e respração baixo ventre.</p>

          <div className={styles.imageGroup1}>
            <Image
                className={styles.hkdPic1}
                alt="Grão Mestre Yun Sik Kim e Mestre Xavier"
                src={hkdPic1}
                priority
            />
            <Image
                className={styles.hkdPic2}
                alt="Mestre Xavier"
                src={hkdPic2}
                priority
            />
          </div>
        
            {/* <div style="float:left;margin:30px;"><img src="resource/img/hapkido-area1.jpg" /></div>
            <div style="float:right;margin:30px;"><img src="resource/img/hapkido-area8.jpg" /></div>
            <div style="clear: both;"></div> */}
        
            <p>A partir do nível Faixa-Preta, inicia-se o treinamento com armas marciais: bastões, espadas, bengala, tonfa, punhal, nunchako e leque. O Hapkido como defesa pessoal, utiliza qualquer instrumento ou material para enfrentar agressões injustas.</p>
            <p>A luta do Hapkido ocorre em qualquer ambiente e desenvolve-se em pé utilizando golpes traumáticos e percussivos, chutes e socos ou ainda no solo com as técnicas de imobilizações e controles.</p>
            <p>A partir de Mestre (4º DAN), o faixa preta incorpora ao seu treinamento do Hapkido, o conhecimento de pontos de acumpuntura e massagem. Tais pontos são utilizados em técnicas de imobilizações e torções causando muita dor no adversário, porém esses mesmos pontos podem ser utilizados em tratamentos e terapias.</p>
            
            <h3>Benefícios do Hapkido para crianças</h3>
            <p>Estudos demonstram que crianças que praticam artes marciais apresentam maior autocontrole, concentração e disciplina. Além de diminuir a agressividade e ansiedade, têm maior qualidade de sono.</p>
            <p>Crianças hiperativas se beneficiam pelo aprendizado do equilíbrio e da disciplina, e passam a entender que há tempo para tudo, desde a saudação em silêncio até o momento de extravasar a energia.</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area5.jpg" /></div> */}
            
            <p>A auto confiança e a concentração são estimuladas. A parte física tem como reflexo o equilíbrado desenvolvimento musculoesquelético, maior coordenação, força e resistência.</p>
            <p>A prática do Hapkido por si só desenvolve um novo comportamento social e psiquico a partir da própria metodologia, da hierarquia, das regras, valores e da ética do Hapkido.</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area6.jpg" /></div> */}
            
            <h3>Benefícios do Hapkido para mulheres</h3>
            
            <p>As mulheres também têm muito a ganhar com essa prática, por atuar de forma preventiva nas artroses em geral, na artrite reumatóide e em várias outras patologias.</p> 
            <p>A prática do Hapkido diminui o estresse e a agressividade. A técnica de respiração baixo-ventre contribui para harmonizar a mente, colaborando com a concentração e atenção plena.</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area10.jpg" /></div> */}
            
            <p>Além de um excelente método de defesa pessoal, o Hapkido se propõe a ensinar a respirar corretamente, trabalhar a força, velocidade e coordenação motriz. Auxilia na prevenção da osteoporose, por ser uma atividade física de força, que estimula os ossos e a musculatura.</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area11.jpg" /></div> */}
            
            <h3>A respiração</h3>
            
            <p>Tanjon Hohopop é uma técnica respiratória utilizando como base o diafragma para fortalecer todo o corpo físico e psiquico. Esse exercício respiratório consiste em expandir o diafragma e levar o ar rico em oxigênio até o abdômem.</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area13.jpg" /></div> */}
            
            <p>É através dessa técnica que se consegue aumentar significativamente a capacidade volumétrica dos pulmões em mais do dobro, oxigenando o corpo e principalmente o cérebro, o que contribui para enfrentar os momentos de tensão e estresse, sendo um passo importante para restabelecer o equilíbrio e harmonia interior.</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area12.jpg" /></div> */}
            
            <p>O Hapkido mais do que uma luta, é um caminho que ensina a ter disciplina, respeito e autocontrole, além de fortalecer o corpo.</p>
            <p>Mente sã em corpo são e espírito equilibrado. <br />
            Essa é a proposta da denominada Arte Marcial da "coordenação da energia interior".</p>
            
            {/* <div style="margin:30px auto;text-align:center"><img src="resource/img/hapkido-area4.jpg" /></div> */}
            
            {/* <div style="text-align:center">
                <strong>O respeito e a disciplina são fundamentais para desenvolver um espírito forte, corajoso e leal.</strong>
            </div>     */}
        </span>  
        
      </main>
      
    </div>
  )
}
