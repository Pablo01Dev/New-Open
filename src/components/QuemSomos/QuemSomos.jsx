import React from "react";
import CarouselConteiner from './CarouselConteiner/CarouselConteiner.jsx'; // Caminho corrigido
import styles from './QuemSomos.module.css'; // Importe o CSS aqui

function QuemSomos() {
    return (
        <div className={styles.quemSomosContainer}>
            <div className={styles.text}>
                <h2>
                    Somos a empresa de bar mais presente em festas e eventos!
                </h2>

                <p>
                    Beber sempre fez parte dos momentos de celebração, e os coquetéis
                    são uma fusão de estilos e tendências que atravessaram gerações.
                    Nós trazemos o melhor da coquetelaria clássica e adicionamos releituras
                    modernas e exclusivas, criando drinks que fazem do seu evento uma
                    experiência única e inesquecível!
                </p>
            </div>

            <div className={styles.carrossel}>
                <CarouselConteiner />
            </div>
        </div>
    );
}

export default QuemSomos;
