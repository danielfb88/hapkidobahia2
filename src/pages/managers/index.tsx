import Head from 'next/head'
import { Inter } from 'next/font/google'
import managerPic1 from '../../../public/assets/manager-pic1.jpg'
import managerPic2 from '../../../public/assets/manager-pic2.jpg'
import managerPic3 from '../../../public/assets/manager-pic3.jpg'
import managerPic4 from '../../../public/assets/manager-pic4.jpg'
import managerPic5 from '../../../public/assets/manager-pic5.jpg'
import managerPic6 from '../../../public/assets/manager-pic6.jpg'
import managerPic7 from '../../../public/assets/manager-pic7.jpg'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Managers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.content}>
        <div className={styles.title}>Quadro de Dirigentes da Federação Baiana de Hapkido</div>
          <div className={styles.containerPics}>
            <div className={styles.picsRow}>
              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic1}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                    <strong>Grão-Mestre Yun Sik Kim</strong><br />
                    Presidente de Honra                            
                </div>             
              </div>

              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic2}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                    <strong>Sabonin Cláudio Xavier</strong><br />
                    Presidente                         
                </div>             
              </div>

              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic3}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                  <strong>Kiosanim Gildemir Cazaes</strong><br />
                  Vice Presidente                          
                </div>             
              </div>
            </div>
            
            <div className={styles.picsRow}>
              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic4}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                    <strong><b>Em memória</b></strong><br />
                    <strong>Kiosanim Antônio Estevez</strong><br />
                    Diretor Técnico                        
                </div>             
              </div>

              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic5}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                    <strong>Kiosanim Carlos Alberto Luz</strong><br />
                      Diretor Financeiro                       
                </div>             
              </div>

              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic6}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                  <strong>Jokionim Raimunda Oliveira</strong><br />
                    Diretor Secretário Geral                          
                </div>             
              </div>
            </div>

            <div className={styles.picsRow}>
              <div className={styles.managerBox}>
                <div>
                  <Image
                      className={styles.managerPic}
                      alt="Diretor(a)"
                      src={managerPic7}
                      priority
                  />
                </div>
                <div className={styles.managerTitle}>
                  <strong>Dra Edna Luz Xavier</strong><br />
                      Diretor Jurídico                          
                </div>             
              </div>
            </div>
            
          </div>
          
      </main>
    </div>
  )
}
