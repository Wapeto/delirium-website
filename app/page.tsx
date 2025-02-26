import HeaderMobile from "./components/HeaderMobile";
import CarteBtn from "./components/CarteBtn";
import PlanningServer from "./components/PlanningServer";
import ResaBtn from "./components/ResaBtn";
import FooterMobile from "./components/FooterMobile";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-2 bg-background pb-0">
      <HeaderMobile />
      <div className="mt-12 flex flex-col  gap-4">
        <CarteBtn />
        <ResaBtn />
      </div>
      <PlanningServer />
      <FooterMobile />
    </main>
  );
}
