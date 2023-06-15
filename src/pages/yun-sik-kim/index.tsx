import Head from 'next/head'
import { Inter } from 'next/font/google'
import yunSikKimPic1 from '../../../public/assets/yun-sik-kim-pic1.jpg'
import styles from './styles.module.css'
import Image from 'next/image'

export default function YunSikKim() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.content}>
        <div className={styles.title}>Sistema Bum Moo</div>
        <span className={styles.text}>
          <p>
            Um breve histórico do Grão-Mestre <strong>YUN SIK KIM</strong> - Criador do estilo <strong>Bum Moo HAPKIDO</strong>.<br />
            Responsável pelo crescimento e desenvolvimento do Hapkido Brasileiro.
          </p>

          <div className={styles.imageGroup}>
            <Image
                className={styles.pic}
                alt="Bum Moo"
                src={yunSikKimPic1}
                priority
            />
          </div>

          <ul>
              <li><strong>Nasceu em 05 de Junho de 1943</strong> - Seul, capital da República da Coréia do Sul</li>
              <li><strong>Em 1954</strong> - Começa a treinar Taekwon-do e HAPKIDO.</li>
              <li><strong>1957</strong> - Recebe o diploma de faixa preta primeiro dan de HAPKIDO das mãos do mestre Young Sul Choi.</li>
              <li><strong>1965</strong> - Inaugura primeira academia, em SeuI, Coréia.</li>
              <li><strong>1968</strong> - Fundação do seu próprio estilo denominado Bum Moo Kwan HAPKIDO, juntamente com a World Bum Moo Kwan HAPKIDO Federation.</li>
              <li><strong>1977</strong> - chega ao Brasil, onde começou a ministrar aulas de Taekwondo e HAPKIDO, na Rua Pretória na Vila Formosa - Tatuapé - SP.</li>
              <li><strong>1981</strong> - Funda a Associação Kim Taewkondo e HAPKIDO Club, situada Praça João Mendes, 183 - 3º andar, esquina com Av. Liberdade - Centro - SP.</li>
              <li><strong>1982</strong> - Recebe o trofeu “PRO TAEKWONDO KOREA” e o diploma internacional de faixa preta 8º dan pela associação KIDO- A poderosa organização Coreana que controla todas as Atividades de artes marciais daquele país.</li>
              <li><strong>1985</strong> - Vice- presidente da associação dos mestres coreanos de TAEKWONDO no Brasil.</li>
              <li><strong>1986</strong> - Recebe os diplomas de faixa preta 8º dan internacional de TAEKWONDO e e 9º dan em HAPKIDO. No mesmo ano recebe o diploma de 1º lugar na demonstração nacional de artes marciais realizada em Manaus. E ainda em 1986 é condecorado pela legião de honra Giuseppe Garibaldi, RS, com a Grão-Cruz e colar da legião.</li>
              <li><strong>1990</strong> - realiza a primeira competição de hapkido no Brasil – I Campeonato Brasileiro de Hapkido</li>
              <li><strong>1990</strong> - funda a Federação de Hapkido do Estado de São Paulo.</li>
              <li><strong>Em 2000</strong> - YUN SIK KIM era o 4º Grão-Mestre a alcançar o 10º Dan de HAPKIDO no mundo.</li>
              <li><strong>2001</strong> - Fundou a Confederação Brasileira de Hapkido, sendo eleito presidente.</li>
              <li><strong>Atualmente ministra aulas (pessoalmente) na Rua da Graça, 89 – Tiradentes – São Paulo-SP.</strong></li>
              <li>Mais informações em: <a href="https://pt.wikipedia.org/wiki/Yun_Sik_Kim" target="_blank">https://pt.wikipedia.org/wiki/Yun_Sik_Kim</a></li>
          </ul>
        </span>  
      </main>
    </div>
  )
}
