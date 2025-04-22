import React from "react";
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.contactContainer} id="contact">
            <div className={styles.line}></div>
            <div className={styles.text}>
                <h2>Quer levar drinks incríveis para o seu evento?</h2>
                <h2>
                    <a href="#">CLIQUE AQUI</a> e solicite o seu orçamento!
                </h2>
            </div>
            <div className={styles.contactInfo}>
                <h2>atendimentorj@newopenbar.com.br</h2>
                <div className={styles.local}>
                    <h3>Rua Siqueira Campos 43, sala 932 – Copacabana, Rio de Janeiro – CEP: 22011-060</h3>
                </div>
                <button>
                    <a href="https://api.whatsapp.com/send?phone=5521991797829&text=Ol%C3%A1%2C%20quero%20trabalhar%20com%20a%20*New%20Open*!">
                        Trabalhe Conosco
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Contact;
