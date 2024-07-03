import images from "./images";

const cocktails = [
	{
		title: "Caipirinha",
		price: "$25",
		tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
	},
	{
		title: "Guaraná",
		price: "$10",
	},
	{
		title: "Caldo de cana",
		price: "$14",
	},
	{
		title: "Cajuína",
		price: "$12",
	},
	{
		title: "Coconut Water",
		price: "$11",
	},
	{
		title: "Chimarrão",
		price: "$18",
	},
	{
		title: "Tererê",
		price: "$15",
	},
];

const awards = [
	{
		imgUrl: images.award,
		title: "Best Restaurant in Brazil",
		subtitle: "2023, 2024",
	},
	{
		imgUrl: images.award,
		title: "Best Amazonian Cuisine In the World",
		subtitle: "2021, 2022, 2023, 2024",
	},
	{
		imgUrl: images.award,
		title: "TOP 10 Best Restaurants in Latin America",
		subtitle: "2022, 2023, 2024",
	},
	{
		imgUrl: images.award,
		title: "Outstanding Chef",
		subtitle:
			"Rodrigo Ribeiro elected TOP 20 Chefs in the World in 2023 and 2024",
	},
];

export default { awards, cocktails };
