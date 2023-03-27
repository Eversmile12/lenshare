export const Toggle = () => {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          className="w-9 h-4 bg-gray-500 
          peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 
           dark:peer-focus:ring-blue-800 
        rounded-full peer dark:bg-gray-700 
        peer-checked:after:translate-x-full  after:content-[''] 
        after:absolute after:top-[2px] after:left-[2px]
         after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all
           peer-checked:bg-pink-main peer-checked:after:left-[10px]"
        ></div>
      </label>
    </div>
  );
};
