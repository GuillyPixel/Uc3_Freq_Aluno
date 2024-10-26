import styles from '../navBar/NavBar.module.css'
import PrimaryButton from '../Buttons/PrimaryButton'

//Import icons from navbar
import user from '../../../public/assets/images/user.svg'
import id from '../../../public/assets/images/id.svg'
import book from '../../../public/assets/images/book.svg'
import exit from '../../../public/assets/images/exit.svg'
import logo from '../../../public/assets/images/Group41.svg'
import filho from '../../../public/assets/images/filhos.svg'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <h1>Opções</h1>
            

            <PrimaryButton
                icon={filho}
                text='Aluno' />
            <PrimaryButton
                icon={id}
                text='Relatorios' />
            <PrimaryButton
                icon={book}
                text='Faltas' />

            <PrimaryButton
                icon={id}
                text='Presenças' />

            <PrimaryButton
                icon={exit}
                text='Alterar Senha' />
                <img className={styles.logo} src={logo} alt="" />

        </nav>
    )
}
export default NavBar