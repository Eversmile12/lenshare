export const ProfileImage = ({ profileImage, hasNotifications = false }) => {
  console.log(hasNotifications);
  return (
    <div className="rounded-_2xl bg-gradient-to-r  from-pink-500 to bg-purple-500 w-92 h-92 items-center justify-center flex">
      <div className="h-88 w-88 rounded-_2xl  bg-white flex justify-center items-center ">
        <div className="relative">
          <img
            className="rounded-_2xl w-77 h-77"
            src={
              profileImage
                ? profileImage
                : "https://via.placeholder.com/500"
            }
          />

          {hasNotifications && (
            <span className="top-0 right-0 absolute w-4 h-4 -mr-2 -mt-1 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          )}
        </div>
      </div>
    </div>
  );
};
