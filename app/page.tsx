import Hero from "./components/Hero/Hero";


export default async function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
