var meta = {
	home: {
		title: "Acceuil"
	},
	invoice: {
		title: "Recu"
	},
	history: {
		title: "Histotique de paiement"
	}
};
var page = {
	home: {
		welcome_message: "Bienvenue sur",
		hero_message: "Gérez vos factures et effectuez vos paiements en toute sécurité. Choisissez l'action que vous souhaitez réaliser.",
		hero_message_1: "Suivez les paiements de vos clients en temps réel."
	},
	bill: {
		empty_bill: "Aucun reçu disponible pour le moment. Veuillez utiliser le formulaire de recherche.",
		form: {
			title: "Trouvez votre reçu",
			label: {
				receipt: "Numéro de reçu",
				client: "Identifiant client"
			}
		},
		number: "Facture",
		period: "Presentations de conseil",
		label: {
			client: "Client",
			emission_date: "Date d'émission",
			due_date: "Date d'échéance",
			bill_details: "Détails des prestation",
			to_pay: "Montant à payer",
			phone: "Numéro de téléphone",
			payment_method: "Moyens de paiement"
		},
		table: {
			desc: "Description",
			qty: "Quantité",
			prize: "Prix",
			total: "Total",
			total_exc_vat: "Sous-total HT",
			discount: "Remise",
			ttc_total: "Total TTC",
			amount_pay: "A Payer"
		},
		pay_history: "Historique de paiement",
		download: "Télécharger",
		contact: "Contact"
	},
	history: {
		empty_bill: "Aucun historique disponible pour le moment. Veuillez utiliser le formulaire de recherche.",
		form: {
			title: "Votre historique de paiement"
		},
		label: {
			client: "Identifiant client",
			view_bill: "Consulter les factures d'un client",
			client_history: "Historique du client",
			bills: "Factures",
			gb_recap: "stats",
			stats: {
				total: "Total",
				paid: "Payées",
				unpaid: "Impayées",
				partial: "Partiel",
				late: "En Retard",
				amount: {
					total: "Montant totale",
					paid: "Montant payé"
				},
				filter: "Filtre"
			}
		}
	},
	button: {
		pay_bill: "Payer une facture",
		get_history: "Consulter son historique",
		search: "Rechercher",
		pay: "Payer"
	},
	footer: {
		rights: "Tous droits réservés."
	},
	error: {
		http_500: "Serveur indisponible",
		global: "Service indisponible"
	},
	success: {
		bill_found: "Facture récupérée avec succès",
		history_found: "Historique récupéré avec succès"
	}
};
const fr = {
	meta: meta,
	page: page
};

export { fr as default, meta, page };
//# sourceMappingURL=fr.mjs.map
