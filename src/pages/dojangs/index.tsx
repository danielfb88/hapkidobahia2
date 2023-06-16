import Head from 'next/head'
import { Inter } from 'next/font/google'
import dojangAbhPic from '../../../public/assets/dojang-abh.png'
import dojangCihPic from '../../../public/assets/dojang-cih.png'
import dojangCtehPic from '../../../public/assets/dojang-cteh.png'
import dojangIbhPic from '../../../public/assets/dojang-ibh.png'
import dojangMhPic from '../../../public/assets/dojang-mh.png'

import dojangAbhTeach1Pic from '../../../public/assets/dojang-abh-teach1.jpg'
import dojangAbhTeach2Pic from '../../../public/assets/dojang-abh-teach2.jpg'
import dojangCihTeachPic from '../../../public/assets/dojang-cih-teach.jpg'
import dojangCtehTeachPic from '../../../public/assets/dojang-cteh-teach.jpg'
import dojangIbhTeachPic from '../../../public/assets/dojang-ibh-teach.jpg'
import dojangMhTeachPic from '../../../public/assets/dojang-mh-teach.jpg'

import styles from './styles.module.css'
import Image from 'next/image'

export default function Managers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.content}>
        <div className={styles.title}>Onde Treinar</div>
        
          <div className={styles.associationBox}>
            <div className={styles.associationName}>Centro de Treinamento e Estudo do Hapkido</div>

            <div className={styles.infoContentBox}>     
              <Image
                className={styles.teacherPic}
                alt="Mestre Luiz Cláudio Xavier"
                src={dojangCtehTeachPic}
                priority
              />
                  
              <div className={styles.associationInfoBox}>
                <div className={styles.associationAddressBox}>
                  Mestre:<br />

                    <table width="230px">
                        <tr>
                            <td><strong>Luiz Cláudio Xavier</strong></td>
                            <td>6º Dan</td>
                        </tr>                                
                    </table>
                    <br />

                    {/* Faixas-pretas:<br />

                    <table width="230px">
                        <tr>
                            <td><strong>Carlos Alberto Ted</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Raimunda Oliveira</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Arlesson Sá</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Luiz Carlos Xavier</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Alfredo Xavier</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Edcláudio Xavier</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Carlos A. Damasceno</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Daniel Bonfim</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Paulo Henrique Amorim</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Sandro Ramos</strong></td>
                        </tr>
                    </table>
                    <br />
                    
                    R. Fernando de Noronha, 126 - Pituba, Salvador - BA, 41900-385<br />
                    Salvador - BA<br />
                    Tel: 55 071 98896-9731<br /><br />

                    Segundas, quartas e sextas às 19:00<br />
                    Sábados às 10:00 <br /><br /> */}

                    {/* <a href="http://www.facebook.com/pages/Centro-De-Treinamento-E-Estudo-Do-Hapkido/587294861438688" target="_blank">
                        <img src="resource/img/facebook-icon.png" alt="Centro de Treinamento e Estudo do Hapkido" title="Centro de Treinamento e Estudo do Hapkido" />    
                    </a>

                    <a href="https://www.instagram.com/mestrexavier/" target="_blank">
                        <img src="resource/img/instagram-icon.png" alt="Centro de Treinamento e Estudo do Hapkido" title="Centro de Treinamento e Estudo do Hapkido" />
                    </a> */}
                </div>

                {/*  <div className={styles.associationSymbolBox}>
                      <img src="resource/img/escudo-cteh.png" alt="Centro de Treinamento e Estudo do Hapkido" title="Centro de Treinamento e Estudo do Hapkido" />
                  </div>

                  <div className={styles.associationMapBox}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.07613083338!2d-38.48528236044922!3d-13.011168200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b6116eac2db%3A0x473ea3af7c4226f9!2sCentro%20de%20Treinamento%20e%20Estudo%20do%20Hapkido%20-%20Academia%20Mestre%20Xavier!5e0!3m2!1spt-BR!2sbr!4v1648909474022!5m2!1spt-BR!2sbr" width="450" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                  </div>   */}
              </div>
            </div>
          </div>
        
           
          
          
      </main>
    </div>
  )
}
