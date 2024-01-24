import myPhoto from "../assets/Foto-Pedro.png";
import RecentProjects from "../Components/RecentProjects";

export default function About() {
  return (
    <main>
      <section className="head-container">
        <img
          className="about-img"
          alt="Pedro's Photo"
          src={myPhoto}
          width="150px"
        />
        <h1 className="page-title">
          Olá, eu sou o Pedro Martins e seja bem vindo à minha jornada na
          programação!
        </h1>
      </section>
      <section>
        <h2 className="page-subtitle">Quem sou eu</h2>
        <p className="description">
          Tenho 26 anos, sou orgulhosamente pai e esposo. Apaixonado por
          desporto onde encontro não apenas uma fonte de saúde, mas também uma
          disciplina para a minha mente. Considero-me um eterno aprendiz do
          mundo, constantemente a absorver novos conhecimentos para aprimorar o
          meu entendimento e ação. Como bom comunicador, busco colaborar com
          pessoas que compartilham a minha visão e mentalidade. Sou uma pessoa
          dedicada e procuro aprimorar as minhas habilidades diariamente. Embora
          reconheça que não sei tudo, a minha determinação é inabalável, e
          enfrento os desafios diários com a convicção de que, através da
          perseverança, encontrarei soluções para qualquer problema. Este sou
          eu, uma pessoa com o desejo de evoluir e que busca pela excelência em
          tudo o que faz.
        </p>
        <h2 className="page-subtitle">Porquê escolhi a programação</h2>
        <p className="description">
          A escolha pela programação é fruto do meu desejo ardente de
          materializar conceitos e ideias de maneira tangível. Vejo na
          programação não apenas uma linguagem de código, mas uma ferramenta
          poderosa para dar vida às minhas visões criativas. Acredito que
          através da programação, posso não apenas expressar minha criatividade,
          mas também enfrentar desafios complexos e construir soluções
          impactantes.
        </p>
      </section>
      <RecentProjects />
    </main>
  );
}
