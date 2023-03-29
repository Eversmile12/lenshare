export const MainButton = ({
  text,
  variant = "primary",
  callback,
  ...rest
}) => {
  let bgColor;
  let textColor = "white";
  // add callback
  switch (variant) {
    case "primary":
      bgColor = "bg-gradient-to-br from-pink-main to bg-purple-main";

      break;
    case "secondary":
      bgColor = "bg-gray-800";
      break;
    case "tertiary":
      bgColor = "bg-gradient-to-br from-gold-500 to bg-gold-300";
      textColor = "black";
      break;
  }
  return (
    <div
      onClick={callback ? callback : null}
      {...rest}
      className={` ${bgColor} cursor-pointer w-28 text-center py-2 rounded-xl text-${textColor}`}
    >
      <a>{text}</a>
    </div>
  );
};
