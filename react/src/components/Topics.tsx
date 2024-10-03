import './Topics.css'

const topicsClass = 'topics_01-div'
const topicContent = [
    {
        key: 'left',
        content: <>
            <h2>100% Elétrica</h2>
            <h3>Controle de Energia Variável</h3>
            <div>
                <h4>Aceleração Extrema</h4>
                <p>0 a 100km/h em 7,3 segundos, para uma saída rápida</p>
            </div>
            <div>
                <h4>Controle Inteligente</h4>
                <p>Feito pela Geely Holding, um sistema de controle inteligente estável entrega uma experiência no
                    volante de uma SUV 100% elétrica</p>
            </div>
        </>
    },
    {
        key: 'center',
        content: <>
            <h2>Destaque das Principais Funções</h2>
            <h3>Carga Inteligente</h3>
            <p>6kW/200V de descarregamento em todos os cenários, ficando à frente nas categorias Pickup e SUV dessa
                faixa de preço, permitindo o uso de funções elétrica a qualquer momento e em qualquer lugar.</p>
        </>
    },
    {
        key: 'right',
        content: <>
            <h2>Uma Pickup para Tudo</h2>
            <h3>Confortável, Compatível & Segura</h3>
            <div>
                <h4>Design Refinado e Interna Espaçosa</h4>
                <p>Sinta-se imerso em uma cabine moderna e acolchegante equipada com mais avançados recursos
                    tecnológicos</p>
            </div>
            <div>
                <h4>Pensada para a Segurança</h4>
                <p>Proteção Multidimensional que te deixa livre de preocupações</p>
            </div>
        </>
    }
]

function Topics() {
    return (
        <section id="topics_01-section">
            { topicContent.map(topic => (
                <div key={topic.key} id={`topic_01-div-${topic.key}`} className={topicsClass}>
                    {topic.content}
                </div>
            )) }
        </section>
    )
}

export default Topics;