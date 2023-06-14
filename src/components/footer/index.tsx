import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import cbhImg from '../../../public/assets/cbh.png'
import facebookImg from '../../../public/assets/facebook.png'
import wbmhfImg from '../../../public/assets/wbmhf.png'

export function Footer() {
    return (
        <div className={styles.footer}>
            <section className={styles.content}>
                <div className={styles.bottom}>
                    <div className={styles.footerLeft}>
                        <Link 
                            href="http://www.cbhkd.com.br/" 
                            target="_blank">
                                <Image 
                                    className={styles.cbhImg}
                                    src={cbhImg} 
                                    alt="Confederação Brasileira de Hapkido" 
                                    title="Confederação Brasileira de Hapkido" 
                                    priority
                                />
                        </Link>
                    </div>
                    
                    <div className={styles.footerCenter}>                    
                        <div className={styles.followFacebook}>
                            <Link 
                                href="http://www.facebook.com/Federa%C3%A7%C3%A3o-Baiana-de-Hapkido-553157264771529" 
                                target="_blank">
                                    <Image 
                                        className={styles.facebookImg}
                                        src={facebookImg} 
                                        alt="Siga-nos no Facebook!" 
                                        title="Siga-nos no Facebook!" 
                                        priority
                                    />
                            </Link>
                        </div>                   
                        <div className={styles.rights}>
                            Copyright © 2016 Federação Baiana de Hapkido<br />
                            Todos os direitos reservados                         
                        </div>
                    </div>                
                    
                    <div className={styles.footerRight}>
                        <Link 
                            href="http://www.facebook.com/BumMooKwanHapkido/" 
                            target="_blank">
                                <Image 
                                    className={styles.wbmhfImg}
                                    src={wbmhfImg}
                                    alt="World Bum Moo Hapkido Federation" 
                                    title="World Bum Moo Hapkido Federation" 
                                />
                        </Link>
                    </div>  
                </div>
            </section>
        </div>
    )
}