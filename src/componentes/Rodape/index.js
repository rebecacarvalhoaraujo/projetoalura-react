import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="\reactalura\imagens (2)\imagens\fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="\reactalura\imagens (2)\imagens\tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="\reactalura\imagens (2)\imagens\ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="\reactalura\imagens (2)\imagens\logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape