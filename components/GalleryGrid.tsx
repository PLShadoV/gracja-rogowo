import Image from "next/image";

export default function GalleryGrid(){
  const pics = new Array(12).fill(0).map((_,i)=>`https://images.unsplash.com/photo-15${64+i}5922${500+i}-1428097a7e18?q=80&w=1600&auto=format&fit=crop`);
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
      {pics.map((src, idx)=>(
        <div key={idx} className="mb-4 overflow-hidden rounded-2xl shadow-md">
          <Image src={src} alt={`Galeria ${idx+1}`} width={1200} height={800} className="h-auto w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
