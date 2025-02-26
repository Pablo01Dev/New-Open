import React from "react";
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}> {/* Adicione a classe container aqui */}
            <img className={styles.logo} src="/images/website/logo-vertical.svg" alt="logo" />
            <div className={styles.title}>
                <h1>Sua experiência<br/>no mais alto nível</h1>
                <img className={styles.backgroudDrink} src="/images/website/drink-capa.png" alt="drink" />
            </div>
        </div>
    );
}

export default Home;
