var meta = {
	home: {
		title: "Home"
	},
	invoice: {
		title: "Bill"
	},
	history: {
		title: "Payment history"
	}
};
var page = {
	home: {
		welcome_message: "Welcome to",
		hero_message: "Manage your invoices and make your payments securely. Select the action you wish to perform.",
		hero_message_1: "Follow up your client's payment in real-time."
	},
	bill: {
		empty_bill: "No receipts available at the moment. Please use the search form.",
		form: {
			title: "Find your receipt",
			label: {
				receipt: "Receipt Id",
				client: "Client Id"
			}
		},
		number: "Bill",
		period: "Consulting presentations",
		label: {
			client: "Client",
			emission_date: "Date of issue",
			due_date: "Due date",
			bill_details: "Bill details",
			to_pay: "Amount to pay",
			phone: "Phone number",
			payment_method: "Payment methods"
		},
		table: {
			desc: "Description",
			qty: "Quantity",
			prize: "Prize",
			total: "Total",
			total_exc_vat: "Sub-total excl. VAT",
			discount: "Discount",
			ttc_total: "Total TTC",
			amount_pay: "To Pay"
		},
		pay_history: "Payment history",
		download: "Download",
		contact: "Contact"
	},
	history: {
		empty_bill: "No history available at the moment. Please use the search form.",
		form: {
			title: "Your payment history"
		},
		label: {
			client: "Client Id",
			view_bill: "View a client's bills",
			client_history: "Client history",
			bills: "Bills",
			gb_recap: "stats",
			stats: {
				total: "Total",
				paid: "Paid",
				unpaid: "Unpaid",
				partial: "Partial",
				late: "Late",
				amount: {
					total: "Total amount",
					paid: "Amount paid"
				},
				filter: "Filter"
			}
		}
	},
	button: {
		pay_bill: "Pay a bill",
		get_history: "View your history",
		search: "Search",
		pay: "Pay"
	},
	footer: {
		rights: "All rights reserved."
	},
	error: {
		http_500: "Server unavailable",
		global: "Service unavailable"
	},
	success: {
		bill_found: "Bill retrieved successfully",
		history_found: "History retrieved successfully"
	}
};
const en = {
	meta: meta,
	page: page
};

export { en as default, meta, page };
//# sourceMappingURL=en.mjs.map
