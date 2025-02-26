import React, { useRef, useEffect, useState } from "react";
import styles from './Services.module.css';
import img1 from '/images/website/xv.jpg';
import img2 from '/images/website/casamento.jpg';
import img3 from '/images/website/portela.jpg';
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
                        Elevando a experiência do seu casamento a um novo nível de sofisticação.
                        Seu casamento merece um serviço de coquetelaria que combine com a sua elegância e bom gosto.
                        Nossa equipe de profissionais cuida de cada detalhe, da seleção dos melhores ingredientes à apresentação impecável dos coquetéis, para que você e seus convidados desfrutem de uma experiência memorável.
                        Nossa carta de coquetéis, com opções clássicas e autorais,  foi criada para satisfazer os paladares mais exigentes, e nosso atendimento personalizado garante que cada convidado se sinta especial.
                        Transforme seu casamento em um evento inesquecível com a New Open. Entre em contato e agende uma degustação
                    </p>
                </div>
                <div className={styles.service3}>
                    <img src={img3} alt="" />
                    <h2>Corporativos</h2>
                    <p>
                        Soluções em Coquetelaria para o seu evento corporativo.
                        Cada evento corporativo é único, e nós entendemos isso.  Com anos de experiência atendendo empresas de diversos setores,  desenvolvemos a expertise para oferecer soluções flexíveis e personalizadas que atendem às suas necessidades, desde coquetéis para recepções a eventos temáticos e confraternizações.
                        Conte com a expertise da New Open para criar um evento inesquecível para seus clientes, parceiros e colaboradores. Entre em contato e solicite um orçamento
                    </p>
                </div>
                <div className={styles.service4}>
                    <img src={img4} alt="" />
                    <h2>Ativação de Marca<br />e Festivais</h2>
                    <p>
                        Seu evento com a excelência que Ele Merece!
                        Acreditamos que um serviço de bar impecável faz toda a diferença em um evento.  Por isso,  oferecemos uma equipe de profissionais altamente qualificados,  atendimento personalizado e atenção a cada detalhe para garantir que sua experiência seja perfeita.
                        De eventos intimistas a grandes festivais,  adaptamos nossos serviços para atender às suas necessidades, criando uma experiência única e impecável para seus convidados.
                        Entre em contato e vamos juntos planejar uma experiência inesquecível!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;