import ProjetkyStranka from '../../vlastnekomponenty/projekty'
import Tempalte from '../../vlastnekomponenty/tempalatepage'
import { client } from "@/lib/sanity";

export default async function Page() {

  // simulácia oneskorenia 5 sekúnd
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const projektytext = await client.fetch(`*[_type == "projektytext"]`);

  return (
    <Tempalte text={projektytext}>
      <ProjetkyStranka data={projektytext} />
    </Tempalte>
  );
}