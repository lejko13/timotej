// "use client";

export default function Home() {

  // const handleClick = () => {
    console.log("PROJECT_ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
    console.log("TAJNE:", process.env.TAJNE);
    console.log("PUBLIC TAJNE:", process.env.NEXT_PUBLIC_TAJNE);
  // };

  return (
    <button >
      Logni env
    </button>
  );
}