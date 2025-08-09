import PricingTable from "../components/PricingTable";
import Reviews from "../components/Reviews";
import ContactBlock from "../components/ContactBlock";

export default function Page() {
  return (
    <main>
      <section style={{padding:"64px 16px", textAlign:"center", background:"#f7f7f7"}}>
        <img src="/logo_gracja.svg" alt="GRACJA" style={{height:56, margin:"0 auto 12px"}} />
        <h1 style={{margin:0, color:"#081c4c"}}>Pokoje i apartamenty przy plaży – Rogowo</h1>
        <p style={{marginTop:8, color:"#555"}}>Nowa strona w budowie — test deployment</p>
      </section>
      <PricingTable />
      <Reviews />
      <ContactBlock />
    </main>
  );
}
