import banner from "/assets/banner.png";
import RecentProjects from "../Components/RecentProjects";
import "../Components/Style/Home.css"
export default function Home() {
  return (
    <main>
      <section>
        <h1 className="title">A minha experiência em programação!</h1>
        <img className="banner" src={banner} alt="code-img" />
        <p className="title-description">
          {`"Descobri na programação uma paixão por inovar e aplicar as minhas
          habilidades em soluções impactantes!"`}
        </p>
      </section>
      <section>
        <h2 className="homepage-subtitle">Como é que tudo começou?</h2>
        <p className="description">
          Desde 2020, dedico-me exclusivamente ao mundo digital, destacando-me
          nas áreas de vendas, redes sociais e edição de vídeos. Há alguns
          meses, tive a oportunidade de ingressar no universo da programação e,
          voilà, apaixonei-me. Agora, minha mente está repleta de ideias
          grandiosas para criar e soluções inovadoras para contribuir ainda mais
          para este vasto mundo!
        </p>
      </section>
      <RecentProjects />
    </main>
  );
}
