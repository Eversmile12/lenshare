import { Toggle } from "./toggle";

export const SettingBlock = ({ title, text, className = "" }) => {
  return (
    <div className={className}>
      <div className="flex gap-2">
        <Toggle />
        <div>
          <h3 className="text-md font-bold">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
