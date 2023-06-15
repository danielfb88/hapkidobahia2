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

        <table>
            <tr>
              <td><strong>Tchariô</strong></td>
              <td>Atenção</td>
            </tr>

            <tr>
              <td><strong>Tchumbi</strong></td>
              <td>Preparar</td>
            </tr>

            <tr>
              <td><strong>Bum</strong></td>
              <td>Tigre</td>
            </tr>

            <tr>
              <td><strong>Moo</strong></td>
              <td>Marcial</td>
            </tr>

            <tr>
              <td><strong>Andjá</strong></td>
              <td>Sentar</td>
            </tr>                  

            <tr>
              <td><strong>Irossôt</strong></td>
              <td>Levantar</td>
            </tr>

            <tr>
              <td><strong>Bal Tchagui Tchumbi</strong></td>
              <td>Preparar para chute</td>
            </tr>

            <tr>
              <td><strong>Shiô</strong></td>
              <td>Descansar</td>
            </tr>

            <tr>
              <td><strong>Kyon né</strong></td>
              <td>Saudação</td>
            </tr>

            <tr>
              <td><strong>Murop Curô</strong></td>
              <td>Ajoelhar</td>
            </tr>

            <tr>
              <td><strong>Cheoun haru bonaeyo</strong></td>
              <td>Tenha um bom dia</td>
            </tr>

            <tr>
              <td><strong>Heonjeong</strong></td>
              <td>Dedicação</td>
            </tr>

            <tr>
              <td><strong>Jokio Nim</strong></td>
              <td>Auxiliar de Professor (3º GUB ao 1º DAN)</td>
            </tr>

            <tr>
              <td><strong>Kiosanim</strong></td>
              <td>Professor (2º e 3º DAN)</td>
            </tr>

            <tr>
              <td><strong>Sabonim</strong></td>
              <td>Mestre (4º ao 6º DAN)</td>
            </tr>

            <tr>
              <td><strong>Kwandjanim</strong></td>
              <td>Grão-Mestre (7º ao 10º DAN)</td>
            </tr>

            <tr>
              <td><strong>GUB</strong></td>
              <td>Grau de faixa colorida</td>
            </tr>
            <tr>
              <td><strong>DAN</strong></td>
              <td>Grau de faixa preta</td>
            </tr>

            <tr>
              <td><strong>Anion Rasseiô</strong></td>
              <td>Cumprimento</td>
            </tr>

            <tr>
              <td><strong>Gam sá Ramnindá</strong></td>
              <td>Obrigado</td>
            </tr>

            <tr>
              <td><strong>Tchonmanevô</strong></td>
              <td>Disponha</td>
            </tr>
          </table>

          <br />

        <div className={styles.title}>Quedas</div>
        <table>
          <tr>
            <td><strong>Ruégion Napop</strong></td>
            <td>Rolamento</td>
          </tr>

          <tr>
            <td><strong>Napop</strong></td>
            <td>Queda com 'brake'</td>
          </tr>

          <tr>
            <td><strong>Tchambam Napop</strong></td>
            <td>Queda de frente</td>
          </tr>

          <tr>
            <td><strong>Fuban Napop</strong></td>
            <td>Queda de costas</td>
          </tr>

          <tr>
            <td><strong>Tchukbang Napop</strong></td>
            <td>Queda lateral</td>
          </tr>

          <tr>
            <td><strong>Kondiun Napop</strong></td>
            <td>Queda aérea sem as mãos</td>
          </tr>

          <tr>
            <td><strong>Koien Napop</strong></td>
            <td>Salto sobre obstáculo</td>
          </tr>

          <tr>
            <td><strong>Tchaien Mul Napop</strong></td>
            <td>Salto à distância com rolamento</td>
          </tr>

          <tr>
            <td><strong>Tchambrim napop</strong></td>
            <td>Queda com salto mortal</td>
          </tr>
        </table>  
          
      </main>
    </div>
  )
}
