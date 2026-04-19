
import Tempalte from '../../vlastnekomponenty/tempalatepage'

export default async function Page() {
  await new Promise(r => setTimeout(r, 2000)) // simulácia loadingu
  return <Tempalte></Tempalte>;
}