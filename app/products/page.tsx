import Gallery from "@/app/components/Gallery/Gallery";

interface ProductsProps {
  readonly searchParams: Q;
}

interface Q {
  readonly q: string;
}

export default async function Products({ searchParams: {q} }: ProductsProps) {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-between p-4">
      <Gallery search={q}/>
    </section>
  );
}
