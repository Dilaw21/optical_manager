import { useState } from "react";
import { createCustomer } from "../services/customerService";

export default function CustomerAdd() {
  const [customer_name, setCustomerName] = useState("");
  const [mobile_no, setMobileNo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await createCustomer({
      customer_name,
      customer_type: "Individual",
      customer_group: "Individual",
      territory: "All Territories",
      mobile_no,
    });

    alert("Customer créé");

    setCustomerName("");
    setMobileNo("");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">
          Nouveau Client
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nom
            </label>

            <input
              type="text"
              placeholder="Nom du client"
              value={customer_name}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Téléphone
            </label>

            <input
              type="text"
              placeholder="Téléphone"
              value={mobile_no}
              onChange={(e) => setMobileNo(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}