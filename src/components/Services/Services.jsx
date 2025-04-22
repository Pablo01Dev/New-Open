import React, { useRef, useEffect, useState } from "react";
import styles from './Services.module.css';
import img1 from '/images/website/xv.jpg';
import img2 from '/images/website/casamento.jpg';
import img3 from '/images/website/corporativo.jpeg';
import img4 from '/images/website/rir.jpeg';

function Services() {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Ajuste este valor conforme necessário
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            id="services"
            className={`${styles.container} ${isVisible ? styles.fadeIn : ''}`}
        >
            <h1>SERVIÇOS</h1>
            <div className={styles.cards}>
                <div className={styles.service1}>
                    <img src={img1} alt="" />
                    <h2>15 anos</h2>
                    <p>
                        Coquetéis com e sem álcool que dão um toque especial à sua festa de 15 anos!
                        Oferecemos uma variedade de drinks deliciosos e personalizados para todos os gostos,
                        desde os clássicos até as criações mais inovadoras. Seus convidados vão amar nossas opções com álcool
                        (para os maiores de idade, é claro ) e os coquetéis sem álcool, igualmente saborosos e deslumbrantes.
                        Entre em contato e faça um orçamento personalizado para sua festa!
                    </p>
                </div>
                <div className={styles.service2}>
                    <img src={img2} alt="" />
                    <h2>Casamento</h2>
                    <p>
                        Eleve seu casamento com a coquetelaria da New Open.
                        Ofereça uma experiência elegante e exclusiva, com drinks preparados por profissionais que cuidam de cada detalhe — dos ingredientes à apresentação.
                        Nossa carta une clássicos e autorais, pensada para surpreender os paladares mais exigentes, com um atendimento que valoriza cada convidado.
                        Torne seu evento inesquecível. Fale com a gente e agende sua degustação.
                    </p>
                </div>
                <div className={styles.service3}>
                    <img src={img3} alt="" />
                    <h2>Corporativos</h2>
                    <p>
                        Soluções em Coquetelaria para o seu evento corporativo.
                        Cada evento corporativo é único, e nós entendemos isso. Com anos de experiência atendendo empresas de diversos setores, temos a expertise para oferecer soluções flexíveis e personalizadas — de recepções a eventos temáticos e confraternizações.
                        Conte com a New Open para tornar seu evento inesquecível para clientes, parceiros e colaboradores. Fale conosco e solicite um orçamento.
                    </p>
                </div>
                <div className={styles.service4}>
                    <img src={img4} alt="" />
                    <h2>Ativação de Marca<br />e Festivais</h2>
                    <p>
                        Seu evento com a excelência que ele merece!
                        Acreditamos que um serviço de bar bem executado faz toda a diferença. Por isso, oferecemos uma equipe qualificada, atendimento personalizado e atenção aos detalhes para garantir uma experiência perfeita.
                        De encontros intimistas a grandes festivais, adaptamos nossos serviços para atender às suas necessidades e encantar seus convidados.
                        Entre em contato e planeje uma experiência inesquecível com a gente!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;