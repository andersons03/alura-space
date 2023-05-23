import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss";

function cabeecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da alura space" />
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura" className={styles.cabecalho__input}/>
                <img src={search} alt="Icone de lupa" />
            </div>
        </header>
    )
}

export default cabeecalho;