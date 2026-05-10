require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

const baseTilesArray = [
	{
		id: 1,
		imgSrcRecto: "/assets/tiles/tile_1_recto.webp",
		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#1 recto left",
		},
		right: {
			landscape: "desert",
			flames: 0,
			alt: "tile#1 recto right",
		},
	},

	{
		id: 2,
		imgSrcRecto: "/assets/tiles/tile_2_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#2 recto left",
		},
		right: {
			landscape: "desert",
			flames: 0,
			alt: "tile#2 recto right",
		},
	},
	{
		id: 3,
		imgSrcRecto: "/assets/tiles/tile_3_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#3 recto left",
		},
		right: {
			landscape: "desert",
			flames: 0,
			alt: "tile#3 recto right",
		},
	},
	{
		id: 4,
		imgSrcRecto: "/assets/tiles/tile_4_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#4 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#4 recto right",
		},
	},
	{
		id: 5,
		imgSrcRecto: "/assets/tiles/tile_5_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#5 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 0,
			resource: "mammooth",
			alt: "tile#5 recto right",
		},
	},
	{
		id: 6,
		imgSrcRecto: "/assets/tiles/tile_6_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#6 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#6 recto right",
		},
	},
	{
		id: 7,
		imgSrcRecto: "/assets/tiles/tile_7_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#7 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#7 recto right",
		},
	},
	{
		id: 8,
		imgSrcRecto: "/assets/tiles/tile_8_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#8 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#8 recto right",
		},
	},
	{
		id: 9,
		imgSrcRecto: "/assets/tiles/tile_9_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#9 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#9 recto right",
		},
	},
	{
		id: 10,
		imgSrcRecto: "/assets/tiles/tile_10_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#10 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#10 recto right",
		},
	},
	{
		id: 11,
		imgSrcRecto: "/assets/tiles/tile_11_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#11 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#11 recto right",
		},
	},
	{
		id: 12,
		imgSrcRecto: "/assets/tiles/tile_12_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#12 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#12 recto right",
		},
	},

	{
		id: 13,
		imgSrcRecto: "/assets/tiles/tile_13_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#13 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#13 recto right",
		},
	},

	{
		id: 14,
		imgSrcRecto: "/assets/tiles/tile_14_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#14 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#14 recto right",
		},
	},
	{
		id: 15,
		imgSrcRecto: "/assets/tiles/tile_15_recto.webp",

		left: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#15 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#15 recto right",
		},
	},
	{
		id: 16,
		imgSrcRecto: "/assets/tiles/tile_16_recto.webp",

		left: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#16 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#16 recto right",
		},
	},
	{
		id: 17,
		imgSrcRecto: "/assets/tiles/tile_17_recto.webp",

		left: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#17 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#17 recto right",
		},
	},
	{
		id: 18,
		imgSrcRecto: "/assets/tiles/tile_18_recto.webp",

		left: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#18 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#18 recto right",
		},
	},
	{
		id: 19,
		imgSrcRecto: "/assets/tiles/tile_19_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#19 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#19 recto right",
		},
	},
	{
		id: 20,
		imgSrcRecto: "/assets/tiles/tile_20_recto.webp",

		left: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#20 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#20 recto right",
		},
	},
	{
		id: 21,
		imgSrcRecto: "/assets/tiles/tile_21_recto.webp",
		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#21 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#21 recto right",
		},
	},
	{
		id: 22,
		imgSrcRecto: "/assets/tiles/tile_22_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#22 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#22 recto right",
		},
	},
	{
		id: 23,
		imgSrcRecto: "/assets/tiles/tile_23_recto.webp",

		left: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#23 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#23 recto right",
		},
	},
	{
		id: 24,
		imgSrcRecto: "/assets/tiles/tile_24_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#24 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 1,
			alt: "tile#24 recto right",
		},
	},

	{
		id: 25,
		imgSrcRecto: "/assets/tiles/tile_25_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#25 recto left",
		},
		right: {
			landscape: "lake",
			flames: 1,
			alt: "tile#25 recto right",
		},
	},

	{
		id: 26,
		imgSrcRecto: "/assets/tiles/tile_26_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#26 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 1,
			alt: "tile#26 recto right",
		},
	},
	{
		id: 27,
		imgSrcRecto: "/assets/tiles/tile_27_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#27 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 1,
			alt: "tile#27 recto right",
		},
	},
	{
		id: 28,
		imgSrcRecto: "/assets/tiles/tile_28_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#28 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 1,
			alt: "tile#28 recto right",
		},
	},
	{
		id: 29,
		imgSrcRecto: "/assets/tiles/tile_29_recto.webp",

		left: {
			landscape: "desert",
			flames: 0,
			alt: "tile#29 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 1,
			alt: "tile#29 recto right",
		},
	},
	{
		id: 30,
		imgSrcRecto: "/assets/tiles/tile_30_recto.webp",

		left: {
			landscape: "desert",
			flames: 1,
			alt: "tile#30 recto left",
		},
		right: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#30 recto right",
		},
	},
	{
		id: 31,
		imgSrcRecto: "/assets/tiles/tile_31_recto.webp",

		left: {
			landscape: "desert",
			flames: 1,
			alt: "tile#31 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#31 recto right",
		},
	},
	{
		id: 32,
		imgSrcRecto: "/assets/tiles/tile_32_recto.webp",

		left: {
			landscape: "meadow",
			flames: 1,
			alt: "tile#32 recto left",
		},
		right: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#32 recto right",
		},
	},
	{
		id: 33,
		imgSrcRecto: "/assets/tiles/tile_33_recto.webp",

		left: {
			landscape: "meadow",
			flames: 1,
			alt: "tile#33 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#33 recto right",
		},
	},
	{
		id: 34,
		imgSrcRecto: "/assets/tiles/tile_34_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#34 recto left",
		},
		right: {
			landscape: "lake",
			flames: 1,
			alt: "tile#34 recto right",
		},
	},
	{
		id: 35,
		imgSrcRecto: "/assets/tiles/tile_35_recto.webp",

		left: {
			landscape: "lake",
			flames: 1,
			alt: "tile#35 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#35 recto right",
		},
	},
	{
		id: 36,
		imgSrcRecto: "/assets/tiles/tile_36_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#36 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 1,
			alt: "tile#36 recto right",
		},
	},

	{
		id: 37,
		imgSrcRecto: "/assets/tiles/tile_37_recto.webp",

		left: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#37 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 1,
			alt: "tile#37 recto right",
		},
	},

	{
		id: 38,
		imgSrcRecto: "/assets/tiles/tile_38_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#38 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 1,
			alt: "tile#38 recto right",
		},
	},
	{
		id: 39,
		imgSrcRecto: "/assets/tiles/tile_39_recto.webp",

		left: {
			landscape: "meadow",
			flames: 0,
			resource: "mammoth",
			alt: "tile#39 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 1,
			alt: "tile#39 recto right",
		},
	},
	{
		id: 40,
		imgSrcRecto: "/assets/tiles/tile_40_recto.webp",

		left: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#40 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 1,
			alt: "tile#40 recto right",
		},
	},
	{
		id: 41,
		imgSrcRecto: "/assets/tiles/tile_41_recto.webp",
		left: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#41 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 2,
			alt: "tile#41 recto right",
		},
	},
	{
		id: 42,
		imgSrcRecto: "/assets/tiles/tile_42_recto.webp",

		left: {
			landscape: "lake",
			flames: 0,
			resource: "fish",
			alt: "tile#42 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 2,
			alt: "tile#42 recto right",
		},
	},
	{
		id: 43,
		imgSrcRecto: "/assets/tiles/tile_43_recto.webp",

		left: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#43 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 2,
			alt: "tile#43 recto right",
		},
	},
	{
		id: 44,
		imgSrcRecto: "/assets/tiles/tile_44_recto.webp",

		left: {
			landscape: "jungle",
			flames: 0,
			resource: "mushroom",
			alt: "tile#44 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 2,
			alt: "tile#44 recto right",
		},
	},
	{
		id: 45,
		imgSrcRecto: "/assets/tiles/tile_45_recto.webp",

		left: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#45 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 2,
			alt: "tile#45 recto right",
		},
	},
	{
		id: 46,
		imgSrcRecto: "/assets/tiles/tile_46_recto.webp",

		left: {
			landscape: "lake",
			flames: 1,
			alt: "tile#46 recto left",
		},
		right: {
			landscape: "jungle",
			flames: 2,
			alt: "tile#46 recto right",
		},
	},
	{
		id: 47,
		imgSrcRecto: "/assets/tiles/tile_47_recto.webp",

		left: {
			landscape: "jungle",
			flames: 1,
			alt: "tile#47 recto left",
		},
		right: {
			landscape: "rocky",
			flames: 2,
			alt: "tile#47 recto right",
		},
	},
	{
		id: 48,
		imgSrcRecto: "/assets/tiles/tile_48_recto.webp",

		left: {
			landscape: "rocky",
			flames: 0,
			resource: "silex",
			alt: "tile#48 recto left",
		},
		right: {
			landscape: "volcano",
			flames: 0,
			volcanoFire: 3,
			alt: "tile#48 recto right",
		},
	},
];

app.use(
	cors({
		origin: process.env.FRONTEND_URL || "http://localhost:5173",
	}),
); //pb avec var env du front

app.get("/api/basetiles", (req, res) => {
	res.json(baseTilesArray);
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Serveur démarré sur le port ${PORT}`);
});
