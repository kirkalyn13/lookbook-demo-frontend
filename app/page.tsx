import Gallery from "./components/Gallery/Gallery";

export default async function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-4">
      <Gallery />
    </main>
  );
}
