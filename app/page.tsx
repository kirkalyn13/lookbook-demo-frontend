import Hero from "./components/Hero/Hero";
import Lookbook from "./components/Lookbook/Lookbook";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <section className="container">
        <Lookbook />
      </section>
    </main>
  );
}
