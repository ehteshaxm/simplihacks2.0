import Button from "../Button";
import { useRouter } from "next/router";

const Cta = () => {
  const router = useRouter();

  return (
    <div className="py-20">
      <div className="container px-12">
        <div className="bg-app-green-100 flex justify-between items-center rounded-2xl py-5 px-10 shadow-4xl-green">
          <div className="max-w-xl">
            <h1 className="text-5xl font-heading font-bold">
              Compete with friends, Score high in exams
            </h1>
            <p className="text-black/80 mt-5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. . Suspendisse
              varius enim in
            </p>
            <Button
              className="mt-8 px-10 py-3"
              onClick={() => router.push("/signin")}
            >
              Get Started
            </Button>
          </div>
          <div className="">
            <img className="w-80" src="/tree.png" alt="tree" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
