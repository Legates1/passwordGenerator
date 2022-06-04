let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
let pass4 = document.getElementById("pass4")
let slider = document.getElementById("slider")
let sliderValue = document.getElementById("slider-value")
sliderValue.textContent = slider.value
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let inputLength = slider.value

String.prototype.sample = function(){
	return this[~~(Math.random() * this.length)];
  }
  symbols.sample() 

 function generate(){
	let result = ""
	for (let i=0; i < Number(inputLength); i++ ){
		result += symbols.sample() 
	  }
	  return result 
 }

 function onPress(){
	 pass1.textContent = generate()
	 pass2.textContent = generate()
	 pass3.textContent = generate()
	 pass4.textContent = generate()
 }

 slider.oninput = function() {
	 inputLength = this.value
	sliderValue.textContent = this.value;
  }