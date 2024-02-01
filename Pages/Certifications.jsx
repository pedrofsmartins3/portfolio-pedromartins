import certificatesData from "../Components/Data/certificatesData.json";
import CreateCertificates from "../Components/CreateCertificates"
import "../Components/Style/Certifications.css"

export default function Certifications() {

  const newArray = [...certificatesData].reverse()

  return (
    <main>
      <h2 className="page-title">Os meus certificados</h2>
      <section className="certificates-container">
        <CreateCertificates certifications={newArray} />
      </section>
      <br></br>
    </main>
  );
}