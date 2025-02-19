import CarteBtn from "./components/CarteBtn";
import Planning from "./components/Planning";
import ResaBtn from "./components/ResaBtn";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      <div className="flex flex-col gap-4">
        <CarteBtn />
        <ResaBtn />
      </div>
      <Planning />
    </main>
  );
}
