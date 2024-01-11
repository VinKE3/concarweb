import Container from "../../components/Container";
import Header from "../../components/Header";
import TriButtons from "../../components/TriButtons";

interface LayoutProps {
  children: React.ReactNode;
  anterior?: boolean;
  anteriorHref?: string;
  siguiente?: boolean;
  siguienteHref?: string;
}

export default function Layout({
  children,
  anterior,
  anteriorHref,
  siguiente,
  siguienteHref,
}: LayoutProps) {
  return (
    <Container>
      <Header
        title="Libros electrónicos"
        href="/tutoriales/libros-electronicos"
        subtitle="Categoría: CONCAR® SIRE SQL"
        text="ILibros electrónicos Compras, Ventas, Diario y Mayor."
      />
      <TriButtons
        indice="/tutoriales/libros-electronicos"
        anterior={anterior}
        anteriorHref={anteriorHref}
        siguiente={siguiente}
        siguienteHref={siguienteHref}
      />
      {children}
    </Container>
  );
}
