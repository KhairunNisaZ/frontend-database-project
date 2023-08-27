import bgImage from "../assets/bg.jpg";

const Home = () => {
  return (
    <div>
      <div className="">
        <img className="w-full" src={bgImage}></img>
        <h1 className="-my-[1000px] mx-[750px] text-slate-200 font-semibold text-7xl">
          WELCOME!
        </h1>
      </div>
    </div>
  );
};

export default Home;
