import Container from "@/app/components/Container";
import Header from "@/app/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header
        title="Instalación y Actualización"
        href="/tutoriales/instalacion-sire"
        subtitle="Categoría: CONCAR® SIRE SQL"
        text="Instalación y Actualización"
      />
      {children}
    </Container>
  );
}
