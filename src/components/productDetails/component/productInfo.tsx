import React from "react";
import Specification from "./specification";

function ProductInfo() {
  return (
    <div className="col-span-2 pr-28 py-14">
      <h5 className="uppercase text-md text-gray-500">Men&apos;s Shoes</h5>
      <h6 className="text-7xl py-5">Nike Air Force 1</h6>
      <h4 className="text-gray-500 font-normal">
        It doesn&apos;t get more legendary than this. Designed to turn heads,
        the Nike Air Force 1 &apos;07 crosses hardwood comfort with off-court
        flair.
      </h4>
      <div className="flex items-start">
        <Specification />
      </div>

      <div>
        <h4 className="uppercase text-slate-500 text-base">perimeter</h4>
        <div className="relative overflow-x-auto my-4">
          <table className="w-full text-sm text-left text-gray-500 border border-slate-100">
            <thead className="text-xs text-gray-700 uppercase border-b border-slate-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 border-l border-slate-100">
                  Foot Length
                </th>
              </tr>
            </thead>
            <tbody>
              {SIZE.map((item, index) => (
                <tr key={index} className="bg-white border-b border-slate-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r border-slate-100"
                  >
                    {item?.size}
                  </th>
                  <td className="px-6 py-4">{item?.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;

const SIZE = [
  {
    id: 1,
    size: 40,
    cm: "26 cm",
  },
  {
    id: 2,
    size: 41,
    cm: "26.5 cm",
  },
  {
    id: 3,
    size: 42,
    cm: "27 cm",
  },
  {
    id: 4,
    size: 43,
    cm: "27.5 cm",
  },
  {
    id: 5,
    size: 44,
    cm: "28 cm",
  },
];
