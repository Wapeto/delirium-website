import HeaderMobile from "./component/HeaderMobile";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <HeaderMobile />
      <h1 className="text-3xl font-bold">
        Welcome to the new Délirium Café Strasbourg&apos;s website
      </h1>
    </main>
  );
}
