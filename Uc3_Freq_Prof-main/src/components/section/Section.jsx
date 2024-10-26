import styles from '../section/Section.module.css';
//import Gui from '../../../public/assets/images/GuilhermeMartinsFernandes.jpg'
import Grafico from '../grafico/grafico'
import Grafico2 from '../grafico/grafico2'

function Section() {
    return (
        <section className={styles.section}>

        <div className={styles.tudo}>
            <div className={styles.foto}><p>Professor</p></div>   
            <div className={styles.ola}>
                <h1>Olá, Guilherme Martins Fernandes!</h1>
                <p className={styles.p1}>Responsável do: Gabriel Almeida Costa</p>
                <p className={styles.p2}>Frequência Escolar: Compareceu a 164 dias de aula </p>
            </div>
        </div>
            <div className={styles.FreqEscolar}>Frequência Escolar</div>

            <div className={styles.tudo2}>

            <div className={styles.grafico}>
                <div className={styles.faltas}>Faltas</div>
                <Grafico />
            </div>

            <div className={styles.grafico2}>
            <div className={styles.presenca}>Presença</div>
            <div className={styles.falta}>Falta: 6,3%</div>
            <Grafico2/>
            <div className={styles.presenca2}>Presença: 93,7%</div>



            </div>


            </div>
       


        </section>
    );
}

export default Section;
