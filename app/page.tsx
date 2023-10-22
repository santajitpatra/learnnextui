import AccordionSection from "../components/AccordionSection";
export default function Home() {
  return (
    <div className="md:container flex flex-col text-center justify-center ">
      <h1 className="text-4xl pb-10">Hello Every one</h1>
      <div className="w-1/2 m-auto text-start">
        <AccordionSection />
      </div>
    </div>
  );
}
