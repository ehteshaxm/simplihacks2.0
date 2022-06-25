const Why = () => {
  return (
    <div className="pt-20 pb-14" id="why">
      <div className="container px-12">
        <h1 className="text-3xl font-medium">Why Earthcoin?</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-center mt-10">
          <div className="place-self-end -mx-10 -my-16">
            <img className="w-72" src="/arrow-down.png" alt="arrow" />
          </div>
          <div className="place-self-center">
            <p className="text-2xl text-black/70">
              “Climate change is real. It is happening right now, it is the most
              urgent threat facing our entire species and we need to work
              collectively together and stop procrastinating.”
            </p>
            <h1 className="text-xl mt-6 font-heading">
              <span className="text-app-green-200">- Leonardo Di Caprio</span>,
              Actor & Environmentalist
            </h1>
          </div>
          <div className="place-self-center">
            <p className="text-2xl text-black/70">
              "What you do makes a difference, and you have to decide what kind
              of difference you want to make."
            </p>
            <h1 className="text-xl mt-6 font-heading">
              <span className="text-app-green-200">- Jane Goodall</span>,
              English primatologist
            </h1>
          </div>
          <div className="place-self-start -mx-10 -my-16">
            <img className="w-72" src="/arrow-up.png" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
