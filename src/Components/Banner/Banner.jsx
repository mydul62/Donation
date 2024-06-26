const Banner = () => {
  return (
    <div className="relative min-h-[500px] flex flex-col justify-center items-center space-y-10 ">
      <div className=" absolute inset-0 bg-no-repeat bg-cover bg-center opacity-15 bg-[url(/doctor2.jpg)]"></div>
      <h1 className="text-[48px] font-bold text-[#0B0B0B] z-30 text-center">
        I Grow By Helping People In Need
      </h1>
      <div className="join z-30">
        <input className="input outline-none input-bordered join-item " placeholder="Search here" />
        <button className="px-7 join-item bg-[#FF444A]">Search</button>
      </div>
    </div>
  );
};

export default Banner;
