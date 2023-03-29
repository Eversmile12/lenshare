import { MainButton } from "~components/button";

export const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-2 bg-black text-white mb-16">
      <div>
        <img src="#"></img>
      </div>
      <div className="flex justify-around gap-20 font-bold">
        <a href="#">faq</a>
        <a href="#">docs</a>
        <a href="#">vote features</a>
      </div>
      <div className="flex gap-16">
        <MainButton callback={null} text={"Leave a review"} />
        <div className="flex gap-2">
          <div className="h-30 w-30 bg-gray-700 rounded-md">
            <img src="#"></img>
          </div>
          <div className="h-30 w-30 bg-gray-700 rounded-md">
            <img src="#"></img>
          </div>
          <div className="h-30 w-30 bg-gray-700 rounded-md">
            <img src="#"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
