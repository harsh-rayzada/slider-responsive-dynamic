/**
 * SlideController
 *
 * @description :: Server-side logic for managing Slides
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var arr = [
	{
		name: "Besan",
		price: "1100"
	},
	{
		name: "Maida",
		price: "200"
	},
	{
		name: "Aaloo",
		price: "3100"
	},
	{
		name: "Nimbu",
		price: "400"
	},
	{
		name: "Pyaj",
		price: "5100"
	},
	{
		name: "urad daal",
		price: "1200"
	},
	{
		name: "chawal",
		price: "2400"
	},
	{
		name: "aata",
		price: "3600"
	},
	{
		name: "chini",
		price: "4200"
	},
	{
		name: "Pyaj",
		price: "5400"
	},
	{
		name: "chawal",
		price: "6100"
	},
	{
		name: "Pyaj",
		price: "1700"
	},
	{
		name: "chini",
		price: "2500"
	},
	{
		name: "Nimbu",
		price: "3400"
	},
	{
		name: "chawal",
		price: "4400"
	},
	{
		name: "Pyaj",
		price: "5200"
	}
];
module.exports = {
	get: function(req, res){
		res.view('home',{data: arr});
	}
};

