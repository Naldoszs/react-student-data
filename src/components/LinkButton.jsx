import { Link } from "react-router-dom";

const LinkButton = ({
  path,
  text,
  textSize = "text-sm",
  bgColor,
  color,
  hoverColor,
  hoverIconColor,
  iconColor,
  icon: Icon,
  scale,
  paddingX = "px-[2rem]",
  paddingY = "py-[1rem]",
}) => {
  return (
    <Link
      to={path}
      className={`rounded-lg ${bgColor} ${color} ${hoverColor} ${paddingX}  ${paddingY} font-semibold ${textSize} flex justify-between items-center text-center w-fit h-auto shadow-xl transition-all duration-500 ease-in-out group ${scale}`}
    >
      {text}
      {Icon && (
        <Icon
          className={`inline-block ml-2 ${iconColor} ${hoverIconColor} transition-all duration-500 ease-in-out`}
        />
      )}
    </Link>
  );
};

export default LinkButton;
