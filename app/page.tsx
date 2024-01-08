import Image from "next/image";
import Container from "./components/Container";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <div className="text-center flex justify-center">
          <Image
            src="/1.jpg"
            alt="logo"
            width={1200}
            height={1200}
            className="cursor-pointer"
          />
        </div>
        <div className="text-center flex justify-center">
          <Image
            src="/2.jpg"
            alt="logo"
            width={1200}
            height={1200}
            className="cursor-pointer"
          />
        </div>
      </Container>
    </main>
  );
}
