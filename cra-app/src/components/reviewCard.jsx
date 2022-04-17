import React from "react";

function ReviewCard() {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto  flex w-full items-center justify-between bg-current px-8 md:px-14 lg:px-2 ">
          <section className="w-full px-6">
            <h2 id="hire" className="secondary-title">
              Hire me
            </h2>
            <p className="section-paragraph">
              Feel free to to contact me any time, through any method below.
            </p>

            <div className="mt-24 grid w-full gap-8 ">
              <div className="space-y-12">
                <p className="... ...  to-purple rounded-lg bg-gradient-to-r from-black via-purple-500 p-6 text-center text-3xl font-extrabold text-white">
                  Report Anomalies
                </p>
                <div>
                  <label className="mb-6 block text-xl font-bold text-white">
                    Name
                  </label>
                  <input
                    className="border-input-border bg-input w-full rounded-xl border px-4 py-4 placeholder-gray-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="mb-6 block text-xl font-bold text-white">
                    Email
                  </label>
                  <input
                    className="border-input-border bg-input w-full rounded-xl border px-4 py-4 placeholder-gray-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="mb-6 block text-xl font-bold text-white">
                    Message
                  </label>
                  <textarea
                    type="email"
                    className="border-input-border bg-input h-48 w-full resize-none rounded-xl border px-4 py-4 placeholder-gray-500"
                    placeholder="Message"
                  ></textarea>
                </div>
                <a
                  href="#"
                  className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                >
                  Send it!
                </a>{" "}
                <button className="bg-theme button px-6 py-2 font-bold text-white">
                  {" "}
                  ALT{" "}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
