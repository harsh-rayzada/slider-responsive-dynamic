/**
 * SlideController
 *
 * @description :: Server-side logic for managing Slides
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var arr = [
	{
		imgSrc : "img3.jpeg",
		link: "1"
	},
	{
		imgSrc : "img4.jpeg",
		link: "2"
	},
	{
		imgSrc : "img5.jpeg",
		link: "3"
	},
	{
		imgSrc : "img6.jpeg",
		link: "4"
	},
	{
		imgSrc : "img7.jpeg",
		link: "5"
	},
	{
		imgSrc : "img8.jpeg",
		link: "6"
	},
	{
		imgSrc : "img10.jpeg",
		link: "7"
	},
	{
		imgSrc : "img11.jpeg",
		link: "8"
	},
	{
		imgSrc : "img3.jpeg",
		link: "9"
	},
	{
		imgSrc : "img4.jpeg",
		link: "10"
	},
	{
		imgSrc : "img5.jpeg",
		link: "11"
	},
	{
		imgSrc : "img6.jpeg",
		link: "12"
	},
	{
		imgSrc : "img7.jpeg",
		link: "13"
	},
	{
		imgSrc : "img8.jpeg",
		link: "14"
	},
	{
		imgSrc : "img10.jpeg",
		link: "15"
	},
	{
		imgSrc : "img11.jpeg",
		link: "16"
	}
];
module.exports = {
	get: function(req, res){
		res.view('home',{data: arr});
	}
};

