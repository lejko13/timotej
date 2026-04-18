import Footer2 from "../footer2";
import { client } from "@/lib/sanity";
import { Suspense } from "react";

async function Footer() {
 

  const zakladneInformacie = await client.fetch(
    `*[_type == "footer"]`
  );

  return (
    <Footer2
      data={zakladneInformacie}
   
    />
  );
}

export default function FOOTETIK() {
  return (
    <Suspense >
      <Footer />
    </Suspense>
  );
}