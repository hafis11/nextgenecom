import React from "react";

function Specification() {
  return (
    <div className="bg-slate-100 flex flex-row rounded-l-full rounded-r-md my-5">
      <div className="flex flex-row px-3">
        {SIZE.map((item, index) => (
          <div
            key={index}
            className="h-10 w-10 rounded-md flex justify-center items-center cursor-pointer"
          >
            <h5>{item?.size}</h5>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="text-white bg-black focus:ring-0 focus:outline-0 focus:ring-blue-300 font-normal rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
      >
        Buy Now
        <svg
          aria-hidden="true"
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Specification;

const SIZE = [
  {
    id: 1,
    size: 40,
  },
  {
    id: 2,
    size: 41,
  },
  {
    id: 3,
    size: 42,
  },
  {
    id: 4,
    size: 43,
  },
  {
    id: 5,
    size: 44,
  },
];
