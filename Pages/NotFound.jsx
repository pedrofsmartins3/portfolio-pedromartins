import { Link } from "react-router-dom"
import "../Components/Style/NotFound.css"

export default function Contact() {
  return (
    <main>
        <h1>Página não encontrada!</h1>
        <Link to="/" className="notfound-btn">Voltar para a página principal!</Link>
    </main>
  );
}