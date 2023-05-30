import React from "react";

function DashboardCard13() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2">
            Pagamentos Boris Pay tenha controle de suas financias boris
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-rose-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      WORKING
                    </a>{" "}
                    WORKING
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-slate-800">-R$49.88</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-green-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      WORKING
                    </a>{" "}
                    WORKING
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">
                      +R$249.88
                    </span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-green-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      WORKING
                    </a>
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">+R$99.99</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-green-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      WORKING
                    </a>
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">R$159.90</span>
                  </div>
                </div>
              </div>
            </li>

            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
                <svg
                  className="w-9 h-9 fill-current text-rose-50"
                  viewBox="0 0 36 36"
                >
                  <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
                </svg>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a
                      className="font-medium text-slate-800 hover:text-slate-900"
                      href="#0"
                    >
                      WORKING
                    </a>{" "}
                    WORKING
                  </div>
                  <div className="shrink-0 self-start ml-2">
                    <span className="font-medium text-slate-800">-R$49.88</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
