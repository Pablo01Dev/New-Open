import React from "react";
import styles from './Header.module.css';
import logo from '../src/assets/react.svg';
import drink from '../src/assets/drink.jpg'; // Certifique-se de importar a imagem do drink

function Home() {
    return (
        <div className={styles.container}> {/* Adicione a classe container aqui */}
            <img src={logo} alt="logo" />
            <h1>Brindes únicos,<br />Eventos inesquecíveis</h1>
            <img src={drink} alt="drink" />
        </div>
    );  
}

export default Home;
