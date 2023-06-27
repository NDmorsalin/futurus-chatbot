import { BsFillMicFill } from "react-icons/bs";
const Home = () => {
  return (
    <div className="flex flex-col justify-end h-full flex-1">
      <div className="mb-16 mx-auto rounded-md border-2 border-transparent relative z-10 p-1 md:w-2/3 w-11/12  overflow-auto h-fit">
        <div className="relative overflow-auto h-full z-10 bg-white dark:bg-slate-900 rounded-md p-4 dark:text-white text-slate-900">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
          voluptas! Reiciendis, nihil eveniet veritatis labore numquam rerum
          optio cumque nobis molestias nesciunt ab laborum pariatur maiores
          atque! Facilis, fugiat corporis?
        </div>
        {/* gradient border */}
        <div className="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-tr from-gradient-blue to-gradient-pink -z-0"></div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className=" w-12 h-12 rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-pink flex items-center justify-center text-3xl text-white  ">
          <BsFillMicFill />
        </div>
      </div>
    </div>
  );
};

export default Home;
