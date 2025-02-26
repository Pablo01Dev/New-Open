import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Social.module.css';

function Social() {
    return (
        <div className={styles.Container}>
            <div className={styles.socialContainer}>
                <div className={styles.text}>
                    <p>
                        Fique por dentro do que acontece na new open bar®, siga-nos nas redes sociais.
                        <br />
                        <br />
                        Curta e compartilhe, seu evento pode ser o próximo.
                    </p>
                </div>

                <div className={styles.subContainer}>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/newopenbar/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/newopenbar/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                    <img src="/images/website/iphone.png" alt="iphone" />
                </div>
            </div>
        </div>
    );
}

export default Social;
