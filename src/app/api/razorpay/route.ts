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
			userId: "userAkli",
			planId: 4,
			name: "Abinash",
			email: "abinash4567@gmail.com"
		}
	};

	try {
		const razorpay = new Razorpay({
<<<<<<< HEAD
			key_id: process.ev.Key_id,
			key_secret: process.env.key_secret,
=======
			key_id: config[key_id],
			key_secret: config[key_secret],
>>>>>>> origin
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
