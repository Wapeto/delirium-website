import HeaderMobile from "./headerMobile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <HeaderMobile />
      <h1 className="text-3xl font-bold">
        Welcome to the new Délirium Café Strasbourg&apos;s website
      </h1>
    </main>
  );
}
