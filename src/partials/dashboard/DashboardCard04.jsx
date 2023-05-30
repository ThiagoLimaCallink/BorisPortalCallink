import React from "react";

import Image01 from "../../images/avartImage/dashuser1.png";
import Image02 from "../../images/avartImage/dashuser2.png";
import Image03 from "../../images/avartImage/dashuser3.jpg";
import Image04 from "../../images/avartImage/dashuser5.png"
import Image05 from "../../images/avartImage/user-36-05.jpg";

function DashboardCard10() {
  const customers = [
    {
      id: "0",
      image: Image05,
      name: "Miranda Itali",
      email: "miranda@callink.com.br",
      cargo: "Supervisora",
    },
    {
      id: "1",
      image: Image01,
      name: "Denner Campelo",
      email: "Denner.campelo@callink.com",
      cargo: "Cordenador",
    },
    {
      id: "2",
      image: Image04,
      name: "Maria Eduarda",
      email: "mariaeduardacallink.com.br",
      cargo: "Analista de Qualidade",
    },
    {
      id: "3",
      image: Image02,
      name: "Murilo Love",
      email: "murilolove@callink.com.br",
      cargo: "Cientista de Dados",
    },
    {
      id: "4",
      image: Image03,
      name: "Luiz",
      email: "luiz@callink.com.br",
      cargo: "Gerente de BI",
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Usuários ativos</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>

                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Cargo</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.image}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="font-medium text-slate-800">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>

                    <td className="p-2 whitespace-nowrap">
                      <div className=" text-gray-400 text-center">
                        {customer.cargo}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
