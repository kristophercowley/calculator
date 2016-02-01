app.controller('MainController',function(){
	this.test = "Testing, 1,2,3";
	this.m2k = function(miles){
		
	}
	//Sets View Model on Button Click and clears old view
	this.activePage = function(currentView){
		if(currentView === this.view){
			this.view = "";
		}else{
			this.view = currentView;
		}
	}
	//Miles and Km conversion//Need to fix exact math, currentl roughed in
	this.milesToKm = function(miles){
		console.log("test")
		this.mToKm = miles * 1.6;
		console.log(this.mToKm);
	}
	this.kmToM = function(km){
		console.log("test2")
		this.kmToM = km / 1.6;
		console.log(this.kmToM);
	}
	
	//Celcius and F conversion
	this.farToC = function(f){
		console.log("testF")
		this.fToC = (f - 32) / 1.8;
		console.log(this.fToC);
	}
	this.celciusToF= function(c){
		console.log("testc")
		this.cToF = (c * 1.8) + 32 ;
		console.log(this.cToF);
	}
})