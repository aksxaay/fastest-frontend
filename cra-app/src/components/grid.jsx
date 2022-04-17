import React from "react";

import pic30 from "../images/Rectangle-30.png";
import pic31 from "../images/Rectangle-31.png";
import pic32 from "../images/Rectangle-32.png";

function Grid() {
  return (
    <div className="bg-black">
      <div className="mx-16 grid grid-cols-1 gap-5  bg-black p-10 text-gray-200 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="overflow-hidden rounded bg-neutral-900 shadow-lg shadow-violet-500/40">
          <img className="w-full" src={pic30} alt="Mountain" />
          <div className="px-6 py-4">
            <p className="text-gray-500">1 Apr 2022</p>

            <div className="mb-2 text-xl font-bold">UPDATE II NOW LIVE</div>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #game
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #update
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-neutral-900 shadow-lg shadow-violet-500/40">
          <img className="w-full" src={pic31} alt="River" />
          <div className="px-6 py-4">
            <p className="text-gray-500">1 Apr 2022</p>

            <div className="mb-2 text-xl font-bold">
              Odyssey Console Development Update
            </div>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #game
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #update
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #summer
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded bg-neutral-900 shadow-lg shadow-violet-500/40">
          <img className="w-full" src={pic32} alt="Forest" />
          <div className="px-6 py-4">
            <p className="text-gray-500">1 Apr 2022</p>

            <div className="mb-2 text-xl font-bold">
              Odyssey Update 9 Now Live
            </div>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #game
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #update
            </span>
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #fall
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
