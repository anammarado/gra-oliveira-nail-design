import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-center bg-white shadow-md">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Gra Oliveira Logo"
          width={150}
          height={50}
        />
      </Link>
    </header>
  );
}
