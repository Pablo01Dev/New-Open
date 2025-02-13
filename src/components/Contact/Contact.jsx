import React from "react";
import styles from './Contact.module.css'; // Importe seu CSS aqui, se necessário

function Contact() {
    return (
        <div className={styles.contactContainer}> 
            <h1>Quer levar drinks incríveis para o seu evento?</h1>
            <h2>CLIQUE AQUI e solicite o seu orçamento!</h2>

            <img src="caminho/para/sua/imagem.jpg" alt="Descrição da imagem" /> 

            <div className={styles.contactInfo}>
                <h2>(21) 99179-7829</h2>
                <h2>Trabalhe Conosco</h2>
                <h2>atendimentorj@newopenbar.com.br</h2>
            </div>

            <div className={styles.local}>
                <h3>Rua Siqueira Campos 43, sala 932 – Copacabana, Rio de Janeiro – CEP: 22011-060</h3>
            </div>
        </div>
    );
}

export default Contact;
