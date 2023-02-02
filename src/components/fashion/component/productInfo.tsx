import React from "react";

function ProductInfo() {
  return (
    <div className="lg:col-span-2 col-span-3 xl:pr-28 lg:pr-10 md:pr-14 md:py-14 py-6">
      <h5 className="uppercase text-md text-gray-500">Lipstick</h5>
      <h6 className="xl:text-7xl py-5 lg:text-4xl md:text-4xl">
        Moisturized Lipstick
      </h6>
      <h4 className="text-gray-500 font-normal">
        FACESCANADA Weightless Enriched with Jojoba and Almond Oil, Highly
        Pigmented, Smooth One Stroke Keeps Lips Moisturized Matte Lipstick
        (Jungle Red, 4gm)
      </h4>

      <div className="my-6">
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
