"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CalendarDays, Clock, Check, Menu, X, Globe, Users, BedDouble, Bath, SunMedium, Waves, Bike, Trees } from "lucide-react";

type Lang = "pl" | "de" | "en";
const dict = {
  pl:{nav:{home:"Start",cottages:"Domki",pricing:"Cennik",gallery:"Galeria",attractions:"Atrakcje",location:"Lokalizacja",contact:"Kontakt"},
      hero:{h1:"Wypocznij nad morzem w",h1Mark:"Gracja Rogowo",sub:"Nowoczesne pokoje i apartamenty 200 m od plaży, z pełnym wyposażeniem, parkingiem i szybkim Wi‑Fi.",ctaAsk:"Zapytaj o termin",ctaSee:"Zobacz ofertę"},
      cottagesTitle:"Pokoje i apartamenty",cottagesSub:"Komfortowe, w pełni wyposażone – idealne dla rodzin i par.",
      pricingTitle:"Cennik 2025",pricingNote:"Cena za dobę / pokój. Rezerwacja minimum wg sezonu. *Ceny orientacyjne.",
      galleryTitle:"Galeria",gallerySub:"Zobacz, jak u nas jest – zdjęcia obiektu i okolicy.",
      attrTitle:"Atrakcje w okolicy",attrSub:"Plaża, trasy rowerowe i jezioro Resko – wszystko na wyciągnięcie ręki.",
      locTitle:"Lokalizacja",locSub:"Rogowo – między Mrzeżynem a Dźwirzynem.",
      reviewsTitle:"Opinie Gości",reviewsSub:"Zobacz recenzje z Google oraz Booking.com",
      formTitle:"Rezerwacja i kontakt",formSub:"Podaj termin i liczbę osób – odpowiemy z wyceną i dostępnością.",bookBtn:"Zarezerwuj"},
  de:{nav:{home:"Start",cottages:"Zimmer",pricing:"Preise",gallery:"Galerie",attractions:"Attraktionen",location:"Lage",contact:"Kontakt"},
      hero:{h1:"Erholen Sie sich am Meer in",h1Mark:"Gracja Rogowo",sub:"Moderne Zimmer & Apartments 200 m vom Strand …",ctaAsk:"Termin anfragen",ctaSee:"Angebot ansehen"},
      cottagesTitle:"Zimmer & Apartments",cottagesSub:"Komfortabel ausgestattet – ideal für Familien und Paare.",
      pricingTitle:"Preise 2025",pricingNote:"Preis pro Nacht/Zimmer. *Richtpreise.",
      galleryTitle:"Galerie",gallerySub:"Bilder der Anlage und Umgebung.",
      attrTitle:"Attraktionen in der Nähe",attrSub:"Strand, Radwege und Resko-See.",
      locTitle:"Lage",locSub:"Rogowo – zwischen Mrzeżyno und Dźwirzyno.",
      reviewsTitle:"Gästebewertungen",reviewsSub:"Siehe Google & Booking.com",
      formTitle:"Reservierung & Kontakt",formSub:"Zeitraum & Personen – wir antworten mit Angebot.",bookBtn:"Buchen"},
  en:{nav:{home:"Home",cottages:"Rooms",pricing:"Pricing",gallery:"Gallery",attractions:"Attractions",location:"Location",contact:"Contact"},
      hero:{h1:"Relax by the sea at",h1Mark:"Gracja Rogowo",sub:"Modern rooms & apartments 200 m from the beach …",ctaAsk:"Check availability",ctaSee:"See offer"},
      cottagesTitle:"Rooms & Apartments",cottagesSub:"Fully equipped – ideal for families and couples.",
      pricingTitle:"Prices 2025",pricingNote:"Price per night / room. *Indicative.",
      galleryTitle:"Gallery",gallerySub:"Photos of property and surroundings.",
      attrTitle:"Nearby attractions",attrSub:"Beach, bike routes and Resko Lake.",
      locTitle:"Location",locSub:"Rogowo – between Mrzeżyno and Dźwirzyno.",
      reviewsTitle:"Guest Reviews",reviewsSub:"See Google & Booking.com",
      formTitle:"Booking & Contact",formSub:"Tell us the dates and number of guests.",bookBtn:"Book now"}
} as const;

const IMAGES=[
 "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1501117716987-c8e7ec3f3e2a?q=80&w=1200&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
];
const ROOMS=[
 {name:"Pokój 2‑osobowy",people:2,bedrooms:1,baths:1,size:16,features:["Łóżko małżeńskie","Aneks kuchenny","Taras/balkon"],img:IMAGES[0]},
 {name:"Pokój 3‑4‑osobowy",people:4,bedrooms:1,baths:1,size:22,features:["Łóżka pojedyncze","Aneks kuchenny","Smart TV"],img:IMAGES[1]},
 {name:"Pokój 4‑os. dwupoziomowy",people:4,bedrooms:2,baths:1,size:30,features:["2 poziomy","Aneks kuchenny","Duży taras"],img:IMAGES[2]},
];
const PRICES=[
 {key:"spring",name:"Sezon Wiosenny",range:"01.04 – 31.05",p2:250,p34:280,p4:300},
 {key:"may",name:"Majówka",range:"30.04 – 03.05",p2:300,p34:350,p4:400},
 {key:"summerEarly",name:"Sezon Letni",range:"30.05 – 22.06",p2:300,p34:350,p4:400},
 {key:"summerPeak",name:"Sezon Wakacyjny",range:"22.06 – 31.08",p2:350,p34:400,p4:450},
 {key:"autumnWinter",name:"Jesień–Zima",range:"01.09 – 31.03",p2:250,p34:280,p4:300},
];

function scrollToId(id:string){ const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:"smooth"}); }

export default function Page(){
  const [lang,setLang]=useState<Lang>("pl");
  const t=dict[lang];
  const [mobile,setMobile]=useState(false);
  const [lightbox,setLightbox]=useState<{open:boolean;index:number}>({open:false,index:0});

  const jsonLd=useMemo(()=>({ "@context":"https://schema.org","@type":"LodgingBusiness", name:"Gracja Rogowo", url:"https://gracjarogowo.pl",
    address:{ "@type":"PostalAddress", streetAddress:"Rogowo 46C", addressLocality:"Rogowo", addressRegion:"Zachodniopomorskie", postalCode:"72-330", addressCountry:"PL"},
    telephone:"+48 799 042 755", sameAs:["https://www.facebook.com/GracjaRogowo","https://www.booking.com/hotel/pl/gracja-przy-plazy.pl.html"], images:IMAGES }),[lang]);

  return (<div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/20 bg-white/70">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2"><Waves className="h-6 w-6"/><span className="font-semibold">Gracja Rogowo</span></div>
        <nav className="hidden md:flex items-center gap-6">
          {Object.entries(t.nav).map(([k,label])=>(<button key={k} onClick={()=>scrollToId(k)} className="text-sm hover:text-sky-700">{label}</button>))}
          <div className="flex items-center gap-2"><Globe className="h-4 w-4"/>{(["pl","de","en"] as Lang[]).map(code=>(<button key={code} onClick={()=>setLang(code)} className={`text-xs px-1 ${lang===code?"font-semibold underline":""}`}>{code.toUpperCase()}</button>))}</div>
          <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white" onClick={()=>scrollToId("contact")}>{t.hero.ctaAsk}</button>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <button onClick={()=>setLang(lang==="pl"?"de":lang==="de"?"en":"pl")} className="text-xs underline"><Globe className="h-4 w-4 inline"/> {lang.toUpperCase()}</button>
          <button onClick={()=>setMobile(true)}><Menu className="h-6 w-6"/></button>
        </div>
      </div>
    </header>

    {mobile && (<div className="fixed inset-0 z-50 bg-black/40" onClick={()=>setMobile(false)}>
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6"><div className="flex items-center gap-2"><Waves className="h-6 w-6"/><span className="font-semibold">Gracja Rogowo</span></div><button onClick={()=>setMobile(false)}><X/></button></div>
        <div className="flex flex-col gap-4">
          {Object.entries(t.nav).map(([k,label])=>(<button key={k} onClick={()=>{setMobile(false);scrollToId(k)}} className="text-left text-base hover:text-sky-700">{label}</button>))}
          <div className="flex items-center gap-3 text-sm"><Globe className="h-4 w-4"/>{(["pl","de","en"] as Lang[]).map(code=>(<button key={code} onClick={()=>setLang(code)} className={`text-xs px-1 ${lang===code?"font-semibold underline":""}`}>{code.toUpperCase()}</button>))}</div>
          <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white" onClick={()=>{setMobile(false);scrollToId("contact")}}>{t.hero.ctaAsk}</button>
        </div>
      </div>
    </div>)}

    <section id="home" className="relative pt-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.hero.h1} <span className="text-sky-700">{t.hero.h1Mark}</span></h1>
            <p className="mt-4 text-lg text-slate-600">{t.hero.sub}</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white" onClick={()=>scrollToId("contact")}><CalendarDays className="mr-2 h-4 w-4"/> {t.hero.ctaAsk}</button>
              <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm border" onClick={()=>scrollToId("cottages")}>{t.hero.ctaSee}</button>
            </div>
            <div className="mt-6 flex gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Rogowo, Pomorze Zachodnie</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> check‑in 16:00 / check‑out 10:00</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMAGES[3]} alt="Gracja Rogowo – pokoje i apartamenty" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"/>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          ["200 m do plaży","Spokojna okolica, szeroka plaża w Rogowie."],
          ["Przyjazne zwierzętom","Akceptujemy psy – ogrodzony teren."],
          ["Szybkie Wi‑Fi","Praca zdalna i streaming bez zacięć."],
          ["Parking","Miejsca postojowe na terenie obiektu."],
          ["Bezpieczeństwo","Monitoring + zamykany teren ośrodka."]
        ].map((u,i)=>(
          <div key={i} className="rounded-2xl bg-white/80 backdrop-blur border p-5">
            <div className="text-base font-semibold mb-1">{u[0]}</div>
            <div className="text-sm text-slate-600">{u[1]}</div>
          </div>
        ))}
      </div>
    </section>

    <section id="cottages" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold">{t.cottagesTitle}</h2><p className="mt-2 text-slate-600">{t.cottagesSub}</p></div>
        <div className="grid md:grid-cols-3 gap-6">
          {ROOMS.map(c=>(
            <div key={c.name} className="rounded-2xl bg-white/80 backdrop-blur border overflow-hidden">
              <div className="aspect-[4/3]"><img src={c.img} alt={c.name} className="h-full w-full object-cover"/></div>
              <div className="p-5">
                <div className="text-lg font-semibold">{c.name}</div>
                <div className="text-sm text-slate-500">{c.size} m² • do {c.people} os.</div>
                <div className="grid grid-cols-3 gap-3 text-sm mt-3">
                  <div className="flex items-center gap-1"><Users className="h-4 w-4"/> {c.people} os.</div>
                  <div className="flex items-center gap-1"><BedDouble className="h-4 w-4"/> {c.bedrooms} syp.</div>
                  <div className="flex items-center gap-1"><Bath className="h-4 w-4"/> {c.baths} łaz.</div>
                  {c.features.slice(0,3).map(f=>(<div key={f} className="col-span-3 flex items-center gap-2"><Check className="h-4 w-4 text-sky-700"/>{f}</div>))}
                </div>
                <div className="mt-4 flex justify-between">
                  <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm border" onClick={()=>scrollToId("gallery")}>Galeria</button>
                  <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white" onClick={()=>scrollToId("contact")}>{t.bookBtn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8"><h2 className="text-3xl md:text-4xl font-bold">{t.pricingTitle}</h2><p className="mt-2 text-slate-600">{t.pricingNote}</p></div>
        <div className="grid md:grid-cols-5 gap-6">
          {PRICES.map(s=>(
            <div key={s.key} className="rounded-2xl bg-white/80 backdrop-blur border">
              <div className="p-5"><div className="text-lg font-semibold">{s.name}</div><div className="text-sm text-slate-500">{s.range}</div></div>
              <div className="px-5 pb-5">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between"><span>Pokój 2‑osobowy</span><span className="font-semibold">{s.p2} PLN</span></li>
                  <li className="flex items-center justify-between"><span>Pokój 3‑4‑osobowy</span><span className="font-semibold">{s.p34} PLN</span></li>
                  <li className="flex items-center justify-between"><span>Pokój 4‑os. dwupoziomowy</span><span className="font-semibold">{s.p4} PLN</span></li>
                </ul>
              </div>
              <div className="px-5 pb-5"><button className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white w-full" onClick={()=>scrollToId("contact")}>{t.bookBtn}</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8"><h2 className="text-3xl md:text-4xl font-bold">Galeria</h2><p className="mt-2 text-slate-600">Zobacz, jak u nas jest.</p></div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src,i)=>(<button key={src} className="group relative overflow-hidden rounded-2xl aspect-[4/3]" onClick={()=>setLightbox({open:true,index:i})}><img src={src} className="h-full w-full object-cover group-hover:scale-105 transition-transform"/></button>))}
        </div>
      </div>
      {lightbox.open && (<div className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center p-4" onClick={()=>setLightbox(s=>({...s,open:false}))}>
        <img src={IMAGES[lightbox.index]} className="max-w-5xl w-full rounded-xl"/>
        <div className="mt-4 flex justify-between gap-3 w-full max-w-5xl">
          <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm border" onClick={(e)=>{e.stopPropagation();setLightbox(s=>({...s,index:(s.index-1+IMAGES.length)%IMAGES.length}))}}>Poprzednie</button>
          <button className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white" onClick={(e)=>{e.stopPropagation();setLightbox(s=>({...s,index:(s.index+1)%IMAGES.length}))}}>Następne</button>
        </div>
      </div>)}
    </section>

    <section id="attractions" className="py-16 bg-sky-50/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8"><h2 className="text-3xl md:text-4xl font-bold">{t.attrTitle}</h2><p className="mt-2 text-slate-600">{t.attrSub}</p></div>
        <div className="grid md:grid-cols-4 gap-6">
          {[SunMedium,Bike,Waves,Trees].map((Icon,i)=>(
            <div key={i} className="rounded-2xl bg-white/80 backdrop-blur border p-5">
              <div className="flex items-center gap-2 mb-2"><Icon className="h-6 w-6 text-sky-700"/><div className="text-lg font-semibold">{["Plaża Rogowo","Trasy rowerowe Velo Baltica","Resko Przymorskie","Lasy sosnowe"][i]}</div></div>
              <div className="text-sm text-slate-600">{["Szeroka, mniej zatłoczona, świetna dla rodzin.","Długie odcinki wzdłuż morza i lasów.","Kitesurfing, SUP, żagle – szkołki i wypożyczalnie.","Spacery, nordic walking, grzyby jesienią."][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="location" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8"><h2 className="text-3xl md:text-4xl font-bold">{t.locTitle}</h2><p className="mt-2 text-slate-600">{t.locSub}</p></div>
        <div className="rounded-2xl overflow-hidden border">
          <iframe title="Mapa Gracja Rogowo" className="w-full h-[420px]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.683801623893!2d15.329147676889193!3d54.15024977253344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47006dfe2b37c343%3A0x907e3320572f761a!2sGRACJA%20-%20Pokoje%20go%C5%9Bcinne%20i%20apartamenty%20przy%20pla%C5%BCy!5e0!3m2!1spl!2spl!4v1754753952433!5m2!1spl!2spl"></iframe>
        </div>
      </div>
    </section>

    <section id="contact" className="py-16 bg-sky-50/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8"><h2 className="text-3xl md:text-4xl font-bold">{t.formTitle}</h2><p className="mt-2 text-slate-600">{t.formSub}</p></div>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="rounded-2xl bg-white/80 backdrop-blur border md:col-span-3 p-5">
            <div className="text-lg font-semibold mb-1">Formularz</div>
            <div className="text-sm text-slate-500 mb-4">Resend Email API (przez /api/send-booking)</div>
            <form onSubmit={async(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget as HTMLFormElement); const p=Object.fromEntries(f.entries()); const r=await fetch("/api/send-booking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}); if(!r.ok) alert("Błąd wysyłki. Napisz: info@gracjarogowo.pl"); else { alert("Wysłano zapytanie. Dziękujemy!"); (e.currentTarget as HTMLFormElement).reset(); } }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-sm">Imię i nazwisko</label><input name="name" className="w-full rounded-xl border px-3 py-2" required/></div>
              <div><label className="text-sm">E‑mail</label><input type="email" name="email" className="w-full rounded-xl border px-3 py-2" required/></div>
              <div><label className="text-sm">Telefon</label><input name="phone" className="w-full rounded-xl border px-3 py-2"/></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-sm">Od</label><input type="date" name="from" className="w-full rounded-xl border px-3 py-2" required/></div>
                <div><label className="text-sm">Do</label><input type="date" name="to" className="w-full rounded-xl border px-3 py-2" required/></div>
              </div>
              <div><label className="text-sm">Liczba osób</label><input type="number" name="guests" min={1} max={10} defaultValue={2} className="w-full rounded-xl border px-3 py-2"/></div>
              <div className="md:col-span-2"><label className="text-sm">Wiadomość</label><textarea name="message" rows={4} className="w-full rounded-xl border px-3 py-2"/></div>
              <div className="md:col-span-2 flex items-start gap-2 text-sm"><input type="checkbox" required className="mt-1"/><span>Akceptuję politykę prywatności i przetwarzanie danych w celu kontaktu.</span></div>
              <div className="md:col-span-2"><button type="submit" className="inline-flex items-center rounded-xl px-4 py-2 text-sm bg-sky-600 text-white w-full">Wyślij zapytanie</button></div>
            </form>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur border md:col-span-2 p-5">
            <div className="text-lg font-semibold mb-3">Dane kontaktowe</div>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +48 799 042 755</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@gracjarogowo.pl</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Rogowo 46C, 72-330</div>
              <div className="pt-2 text-sm">Facebook: <a className="underline" href="https://facebook.com/GracjaRogowo" target="_blank">facebook.com/GracjaRogowo</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="border-t bg-white/70">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        <div><div className="font-semibold mb-2">Gracja Rogowo</div><p className="text-sm text-slate-600">Pokoje gościnne i apartamenty przy plaży w Rogowie.</p></div>
        <div><h4 className="font-medium mb-2">Nawigacja</h4><ul className="space-y-1 text-sm">{Object.entries(t.nav).map(([k,label])=>(<li key={k}><button onClick={()=>scrollToId(k)} className="hover:underline">{label}</button></li>))}</ul></div>
        <div><h4 className="font-medium mb-2">Kontakt</h4><ul className="space-y-1 text-sm text-slate-700"><li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +48 799 042 755</li><li className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@gracjarogowo.pl</li><li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Rogowo 46C, 72-330</li><li><a className="underline" href="https://facebook.com/GracjaRogowo" target="_blank">Facebook</a></li></ul></div>
        <div><h4 className="font-medium mb-2">Informacje</h4><ul className="space-y-1 text-sm text-slate-700"><li>© {new Date().getFullYear()} Gracja Rogowo</li></ul></div>
      </div>
    </footer>
  </div>);
}
