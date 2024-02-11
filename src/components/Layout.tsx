import { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }:LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-900 px-6 py-3">
        <div className="mx-auto max-w-5xl pb-2">{children}</div>
      </main>
      <footer className="bg-gradient-to-b from-stone-900 to-white-500 text-black py-16" />
    </>
  );
};