import { client } from "@/lib/sanity";
import Uisamosatane from "../../../vlastnekomponenty/uisamostatne";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const data = await client.fetch(
    `*[_type == "Projekty" && slug.current == $slug][0]`,
    { slug }
  );

  return <Uisamosatane data={data} />;
}