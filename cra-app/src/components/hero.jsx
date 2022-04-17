import React from "react";

const divStyle = {
  "background-image": `url(
    "https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  )`,
  "background-repeat": "no-repeat",
  "background-size": "cover",
  "background-blend-mode": "multiply",
};
function Hero() {
  return (
    <>
      <div className="bg-black">
        <div class="mx-[2.5em] grid grid-cols-1 gap-5 bg-black px-10 pt-10 text-gray-200 sm:grid-cols-1 md:grid-cols-2">
          <div className="flex  flex-grow flex-row flex-wrap justify-center bg-black p-3">
            <div className="my-auto">
              <div
                className="flex flex-row flex-wrap rounded-lg bg-gray-600 p-3 antialiased shadow-lg"
                style={divStyle}
              >
                <div className="mx-16 flex flex-row flex-wrap ">
                  <div className="relative mx-8 my-[6.15rem] p-16 text-left font-semibold text-gray-700 ">
                    <div className="text-normal cursor-pointer text-gray-300 hover:text-gray-400">
                      <span className="border-b border-dashed border-gray-500 pb-1">
                        1 Apr 2022
                      </span>
                    </div>
                    <div className="mt-2 text-left text-2xl font-black leading-tight text-white">
                      UPDATE II Now Live
                    </div>
                    <div className="mt-8 text-left font-sans leading-tight text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed dictum quam non turpis bibendum, eu scelerisque
                    </div>

                    <div className="bottom-0 right-0 cursor-pointer pt-3 text-sm text-gray-300 hover:text-gray-400 md:absolute md:pt-0">
                      Posted: <b>2 days ago</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-grow flex-row flex-wrap justify-center bg-black p-3">
            <div className="my-auto">
              <div
                className="mb-6 flex flex-row flex-wrap rounded-lg bg-gray-600 p-3 antialiased shadow-lg"
                style={divStyle}
              >
                <div className="mx-14 flex flex-row flex-wrap ">
                  <div className="relative mx-16 p-16 text-left font-semibold text-gray-700 ">
                    <div className="text-normal cursor-pointer text-gray-300 hover:text-gray-400">
                      <span className="border-b border-dashed border-gray-500 pb-1">
                        11 Jan 2030
                      </span>
                    </div>
                    <div className="mt-2 text-left text-2xl leading-tight text-white">
                      Taurus Mining Ventures Operation Concludes
                    </div>

                    <div className="bottom-0 right-0 cursor-pointer pt-3 text-sm text-gray-300 hover:text-gray-400 md:absolute md:pt-0">
                      Posted: <b>5 days ago</b>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-row flex-wrap rounded-lg bg-gray-600 p-3 antialiased shadow-lg"
                style={divStyle}
              >
                <div className="mx-12 flex flex-row flex-wrap ">
                  <div className="relative mx-16 p-16 text-left font-semibold text-gray-700 ">
                    <div className="text-normal cursor-pointer text-gray-300 hover:text-gray-400">
                      <span className="border-b border-dashed border-gray-500 pb-1">
                        1 Apr 2022
                      </span>
                    </div>
                    <div className="mt-2 text-left text-2xl leading-tight text-white">
                      Marlinists Hold Public Referendum{" "}
                    </div>

                    <div className="bottom-0 right-0 cursor-pointer pt-3 text-sm text-gray-300 hover:text-gray-400 md:absolute md:pt-0">
                      Posted: <b>7 days ago</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
