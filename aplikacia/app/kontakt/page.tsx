import { client } from "@/lib/sanity";

export default async function KontaktPage() {
  const data = await client.fetch(`*[_type == "zakladneInformacie"]`);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">Kontakt</h1>

      {data.map((item: any) => (
        <div key={item._id}>
          <p>{item.LogoNazovWebu}</p>
        </div>
      ))}
    </div>
  );
}