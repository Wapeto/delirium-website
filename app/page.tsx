import HeaderMobile from "./components/HeaderMobile";
import CarteBtn from "./components/CarteBtn";
import PlanningServer from "./components/PlanningServer";
import ResaBtn from "./components/ResaBtn";
import Map from "./components/Map";
import FooterMobile from "./components/FooterMobile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-2 bg-background pb-0">
      <HeaderMobile />
      <Image src="/img/logo.png" alt="logo" width={270} height={382} />
      <div className="mt-2 flex flex-col  gap-4">
        <CarteBtn />
        <ResaBtn />
      </div>
      <PlanningServer />
      <Map />
      <FooterMobile />
    </main>
  );
}
