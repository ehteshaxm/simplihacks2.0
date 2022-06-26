const Work = () => {
  return (
    <div className="pt-24 pb-28" id="work">
      <div className="container px-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tight">
          How does it <span className="text-app-green-200">work</span>?
        </h1>
        <p className="text-black/60 mt-8 max-w-2xl text-center">
          Environmental events are sponsored by brnads that allow you to earn
          coins and then use those coins to get coupons.
        </p>

        <div className="mt-20 flex justify-between w-full xl:w-10/12">
          <div className="border-4 border-black shadow-4xl rounded-3xl flex flex-col items-center px-6 py-8 w-72 text-center">
            <img className="h-12 w-12" src="/metamask.png" alt="metamask" />
            <h1 className="text-xl font-medium mt-4">Signup with metamask</h1>
            <p className="text-black/60 mt-3">
              Download metamask from chrome, use eth account for signup.
            </p>
          </div>
          <div className="border-4 border-black shadow-4xl rounded-3xl flex flex-col items-center px-6 py-8 w-72 text-center">
            <img className="h-12 w-12" src="/token.png" alt="token" />
            <h1 className="text-xl font-medium mt-4">Help and earn tokens</h1>
            <p className="text-black/60 mt-3">
              Help cleaning mother earth and earn coins.
            </p>
          </div>
          <div className="border-4 border-black shadow-4xl rounded-3xl flex flex-col items-center px-6 py-8 w-72 text-center">
            <img className="h-12 w-12" src="/wallet.png" alt="wallet" />
            <h1 className="text-xl font-medium mt-4">Cash them for rewards</h1>
            <p className="text-black/60 mt-3">
              Trade collected tokens for global brand coupons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
