'use client';
import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button';
import Pay from '@/lib/serverActions';
import { config } from '@/app/config/config';
import React from 'react'


// function loadScript(src: string) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
// 		script.src = src
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.body.appendChild(script)
// 	})
// }

function Home() {
	async function displayRazorpay() {
		// const res = await loadScript(
		// 	"https://checkout.razorpay.com/v1/checkout.js"
		// );

		// if (!res) {
		// 	alert("Razorpay SDK failed to load. Are you online?");
		// 	return;
		// }

		const response = await fetch("/api/razorpay", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const { data } = await response.json();
		console.log(data);
		Pay(data);

		// const options = {
		// 	key: config.key_id,

		// 	currency: data.currency,
		// 	amount: data.amount.toString(),
		// 	order_id: data.id,
		// 	name: "Charity",
		// 	description: "Thank you for nothing. Please give us some money",
		// 	handler: function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }) {
		// 		alert(response.razorpay_payment_id);
		// 		alert(response.razorpay_order_id);
		// 		alert(response.razorpay_signature);
		// 	}
		// };

		// const paymentObject = new (window as any).Razorpay(options);
		// paymentObject.open();
	}

	return (
		<>
			<div className='flex flex-row-reverse m-5'><ModeToggle /></div>
			<div onClick={displayRazorpay} className='flex justify-center items-center'><Button>Pay for Subscription</Button></div>
			{/* <a  onClick={displayRazorpay} className="bg-slate-600 rounded-xl p-4 cursor-pointer" >Buy Subscription</a> */}
		</>
	)
}

export default Home