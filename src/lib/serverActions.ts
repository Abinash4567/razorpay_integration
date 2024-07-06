import { config } from "@/app/config/config";

type props = {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: string;
    offer_id: string | null; // Allow null for offer_id
    status: "created" | "processed" | "failed" | string; // Define specific status options or allow any string
    attempts: number;
    notes: string[];
    created_at: number;
}

export default function Pay(data: props) {
    const options = {
        key: "rzp_test_OTpHtNZdXPFxsp",
        // key: config.key_id,

        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: "Charity",
        notes: data.notes,
        description: "Thank you for nothing. Please give us some money",
        "theme": {
            "color": "#011d2b"
        },
        handler: async function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }) {
            console.log(response);
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
        }
    };
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function () {
        alert("Payment failed. Please try again.");
    });
}