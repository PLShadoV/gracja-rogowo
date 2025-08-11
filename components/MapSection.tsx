export default function MapSection(){
  return (
    <div id="map" className="overflow-hidden rounded-2xl border" style={{ borderColor: "#e6e8ef" }}>
      <iframe title="Mapa" src="https://maps.google.com/maps?q=Rogowo%20Poland&t=&z=12&ie=UTF8&iwloc=&output=embed" className="h-80 w-full" loading="lazy" />
    </div>
  );
}
