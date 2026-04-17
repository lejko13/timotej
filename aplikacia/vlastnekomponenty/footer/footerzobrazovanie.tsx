import { Header } from '../header/header'
import { client } from "@/lib/sanity"
import { Suspense } from "react"

async function Footer() {
  const header = await client.fetch(`
    *[_type == "Header"]{
      ...,
      Referecnie[]-> 
    }
  `)

  const zakladneInformacie = await client.fetch(
    `*[_type == "zakladneInformacie"]`
  )

  return (
    <Header
      data={header}
      data2={zakladneInformacie}
    />
  )
}

export default function DATAheader() {
  return (
    <Suspense>
      {/* <HeaderData /> */}
    </Suspense>
  )
}
