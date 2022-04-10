import { useState } from "react";

const Alert = ({ alertObj }) => {
  const { type, message } = alertObj;
  const [isShowing, setShowing] = useState(alertObj ? true : false);
  let obj = {
    styles: `flex justify-between align-center absolute w-3/4 left-0 right-0 mx-auto bottom-[10%] rounded border px-3 py-3 `,
  };
  if (type) {
    let lowercaseType = type.toLowerCase();
    switch (lowercaseType) {
      case "error":
        obj.title = "ERROR";
        obj.styles = `${obj.styles} bg-red-100 border-red-400 text-red-700 `;
        obj.message = message;
        break;

      default:
        break;
    }
  }

  const handleCloseAlert = () => {
    setShowing(false);
  };

  return (
    <div className={`${isShowing ? obj.styles : "hidden"}`} role="alert">
      <div className={`flex `}>
        <span>
          <strong className="font-bold">{obj?.title} </strong>
        </span>
        <span className="ml-1 ">{obj?.message}</span>
      </div>
      <button className={`align-end px-4`} onClick={handleCloseAlert}>
        <span className="">
          <svg
            className={`text-${obj.color}-500 h-6 w-6 fill-current`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>{obj.title}</title>

            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Alert;
