import HeaderMobile from "./components/HeaderMobile";
import CarteBtn from "./components/CarteBtn";
import ResaBtn from "./components/ResaBtn";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-2 bg-background pt-0">
      <HeaderMobile />
      <div className=" mt-[70rem] flex flex-col  gap-4">
        <CarteBtn />
        <ResaBtn />
      </div>
    </main>
  );
}
