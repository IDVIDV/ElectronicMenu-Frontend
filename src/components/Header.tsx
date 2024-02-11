import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white px-9 flex">
      <nav className="mx-auto max-w-3xl h-20 flex items-center">
        <ul className="flex flex-row">
          <li className="font-bold font-serif text-3xl mx-5">
            <Link href="/">Главная</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};