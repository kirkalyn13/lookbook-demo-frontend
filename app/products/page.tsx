import Gallery from "@/app/components/Gallery/Gallery";

export default async function Products() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-between p-4">
      <Gallery />
    </section>
  );
}
