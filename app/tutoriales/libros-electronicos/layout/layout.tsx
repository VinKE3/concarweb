import Container from "@/app/components/Container";
import Header from "@/app/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header
        title="Libros electrónicos"
        href="/tutoriales/libros-electronicos"
        subtitle="Categoría: CONCAR® SIRE SQL"
        text="Libros electrónicos Compras, Ventas, Diario y Mayor."
      />
      {children}
    </Container>
  );
}
