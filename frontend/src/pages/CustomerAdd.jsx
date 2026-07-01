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
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nom"
                value={customer_name}
                onChange={(e) => setCustomerName(e.target.value)}
            />

            <input
                placeholder="Téléphone"
                value={mobile_no}
                onChange={(e) => setMobileNo(e.target.value)}
            />

            <button type="submit">Enregistrer</button>
        </form>
    );
}