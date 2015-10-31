/**
 * SlideController
 *
 * @description :: Server-side logic for managing Slides
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var arr = [
	{
		imgSrc : "img3.jpeg",
		price: "100"
	},
	{
		imgSrc : "img4.jpeg",
		price: "200"
	},
	{
		imgSrc : "img5.jpeg",
		price: "300"
	},
	{
		imgSrc : "img6.jpeg",
		price: "400"
	},
	{
		imgSrc : "img7.jpeg",
		price: "500"
	},
	{
		imgSrc : "img8.jpeg",
		price: "100"
	},
	{
		imgSrc : "img10.jpeg",
		price: "200"
	},
	{
		imgSrc : "img11.jpeg",
		price: "300"
	},
	{
		imgSrc : "img3.jpeg",
		price: "400"
	},
	{
		imgSrc : "img4.jpeg",
		price: "500"
	},
	{
		imgSrc : "img5.jpeg",
		price: "600"
	},
	{
		imgSrc : "img6.jpeg",
		price: "100"
	},
	{
		imgSrc : "img7.jpeg",
		price: "200"
	},
	{
		imgSrc : "img8.jpeg",
		price: "300"
	},
	{
		imgSrc : "img10.jpeg",
		price: "400"
	},
	{
		imgSrc : "img11.jpeg",
		price: "500"
	}
];
module.exports = {
	get: function(req, res){
		res.view('home',{data: arr});
	}
};

