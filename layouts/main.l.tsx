export const PopupLayout = ({ children, width, height }) => {
  return (
    <div
      className={`h-500 w-300 flex flex-col px-8 py-3 bg-slate-50`}
    >
      <div className="w-full">{children}</div>
      <div className="flex flex-col items-center gap-1 mt-4 opacity-80 w-full">
        <a>logout</a>
        <a>
          <strong>leave a star on Github</strong>
        </a>
        <a>
          created with 🧡 by the
          <strong>community</strong>
        </a>
      </div>
    </div>
  );
};
