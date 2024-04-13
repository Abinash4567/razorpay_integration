const Razorpay = require('razorpay');
import { config } from "@/app/config/config";

export async function POST(req: Request, res: Response) {
	// console.log(typeof config.key_id.substring(1, 24));
	const payment_capture = 1;
	const amount = 499;
	const currency = "INR";

	const options = {
		amount: amount * 100,
		currency,
		receipt: "receipt-1",
		notes: {
			userId: 1,
			planId: 1,
		}
	};

	try {
		const razorpay = new Razorpay({
			key_id: "rzp_test_OTpHtNZdXPFxsp",
			key_secret: "szjJfyPsER72kKIReEhWPxWk",
		});

		const response = await razorpay.orders.create(options);
		console.log(response);
		return new Response(JSON.stringify({ data: response }), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.log(error);
		return new Response(
			JSON.stringify({ message: "Failed to Parse information." }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}
