import Head from 'next/head'
import styles from './styles.module.css'

export default function Vocabulary() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Federação Baiana de Hapkido</title>
      </Head>
      
      <main className={styles.content}>
        <div className={styles.title}>Vocabulario</div>

        <table className={styles.table}>
            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Tchariô</strong></td>
              <td className={styles.tdTh}>Atenção</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Tchumbi</strong></td>
              <td className={styles.tdTh}>Preparar</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Bum</strong></td>
              <td className={styles.tdTh}>Tigre</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Moo</strong></td>
              <td className={styles.tdTh}>Marcial</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Andjá</strong></td>
              <td className={styles.tdTh}>Sentar</td>
            </tr>                  

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Irossôt</strong></td>
              <td className={styles.tdTh}>Levantar</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Bal Tchagui Tchumbi</strong></td>
              <td className={styles.tdTh}>Preparar para chute</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Shiô</strong></td>
              <td className={styles.tdTh}>Descansar</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Kyon né</strong></td>
              <td className={styles.tdTh}>Saudação</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Murop Curô</strong></td>
              <td className={styles.tdTh}>Ajoelhar</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Cheoun haru bonaeyo</strong></td>
              <td className={styles.tdTh}>Tenha um bom dia</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Heonjeong</strong></td>
              <td className={styles.tdTh}>Dedicação</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Jokio Nim</strong></td>
              <td className={styles.tdTh}>Auxiliar de Professor (3º GUB ao 1º DAN)</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Kiosanim</strong></td>
              <td className={styles.tdTh}>Professor (2º e 3º DAN)</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Sabonim</strong></td>
              <td className={styles.tdTh}>Mestre (4º ao 6º DAN)</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Kwandjanim</strong></td>
              <td className={styles.tdTh}>Grão-Mestre (7º ao 10º DAN)</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>GUB</strong></td>
              <td className={styles.tdTh}>Grau de faixa colorida</td>
            </tr>
            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>DAN</strong></td>
              <td className={styles.tdTh}>Grau de faixa preta</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Anion Rasseiô</strong></td>
              <td className={styles.tdTh}>Cumprimento</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Gam sá Ramnindá</strong></td>
              <td className={styles.tdTh}>Obrigado</td>
            </tr>

            <tr className={styles.tdTh}>
              <td className={styles.tdTh}><strong>Tchonmanevô</strong></td>
              <td className={styles.tdTh}>Disponha</td>
            </tr>
          </table>

          <br />

        <div className={styles.title}>Quedas</div>
        <table className={styles.table}>
          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Ruégion Napop</strong></td>
            <td className={styles.tdTh}>Rolamento</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Napop</strong></td>
            <td className={styles.tdTh}>Queda com 'brake'</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Tchambam Napop</strong></td>
            <td className={styles.tdTh}>Queda de frente</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Fuban Napop</strong></td>
            <td className={styles.tdTh}>Queda de costas</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Tchukbang Napop</strong></td>
            <td className={styles.tdTh}>Queda lateral</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Kondiun Napop</strong></td>
            <td className={styles.tdTh}>Queda aérea sem as mãos</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Koien Napop</strong></td>
            <td className={styles.tdTh}>Salto sobre obstáculo</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Tchaien Mul Napop</strong></td>
            <td className={styles.tdTh}>Salto à distância com rolamento</td>
          </tr>

          <tr className={styles.tdTh}>
            <td className={styles.tdTh}><strong>Tchambrim napop</strong></td>
            <td className={styles.tdTh}>Queda com salto mortal</td>
          </tr>
        </table>  
          
      </main>
    </div>
  )
}
