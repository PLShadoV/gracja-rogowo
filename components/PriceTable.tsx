export default function PriceTable(){
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm" style={{ borderColor: "#e6e8ef" }}>
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50">
          <tr className="text-slate-600">
            <th className="px-6 py-4">Sezon</th>
            <th className="px-6 py-4">Termin</th>
            <th className="px-6 py-4">Cena / doba</th>
            <th className="px-6 py-4">Min. pobyt</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-6 py-4 font-medium">Wysoki</td>
            <td className="px-6 py-4">Lipiec – Sierpień</td>
            <td className="px-6 py-4">od 480 zł</td>
            <td className="px-6 py-4">3 noce</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 font-medium">Średni</td>
            <td className="px-6 py-4">Maj – Czerwiec / Wrzesień</td>
            <td className="px-6 py-4">od 380 zł</td>
            <td className="px-6 py-4">2 noce</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 font-medium">Niski</td>
            <td className="px-6 py-4">Październik – Kwiecień</td>
            <td className="px-6 py-4">od 300 zł</td>
            <td className="px-6 py-4">1 noc</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
