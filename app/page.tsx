import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-yellow-400 h-screen w-[115%] absolute pt-20 -rotate-6 -translate-y-20 top-0 -translate-x-60" />
      <div className="bg-yellow-400 h-1/2 w-screen absolute pt-20 -translate-y-[6.5rem]" />
      <Navbar />
      <div></div>
    </>
  );
}
