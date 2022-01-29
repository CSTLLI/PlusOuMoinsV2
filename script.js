enter = document.querySelector("button");
input = document.querySelector("input");

infos = document.querySelector("#infos");
tentatives = document.querySelector("#tentatives")
ind = document.querySelector("#indice");
panel = document.querySelector(".values");

let chances = 5;

var randomNbr = Math.floor(Math.random() * 100);
console.log(`Valeur à trouver : ${randomNbr}`);

// Fonctions

function reset(){
	input.remove();
	enter.remove();
	infos.remove();

	principal = document.querySelector(".principal");
	principal.innerHTML += `
							<button type="button" class="reset btn btn-primary w-50 mx-auto">Rejouer</button>
						  `

	let reset = document.querySelector(".reset");

	reset.addEventListener("click", function(){
		location.reload();
	});
}

function findNumber(){
	if (number >= 0 && number <= 100){
		if (randomNbr > number){
			enter.classList.remove("btn-primary");
			enter.classList.add("btn-danger");
			ind.innerText = "Le nombre est trop petit.";
		} else if (randomNbr < number){
			enter.classList.remove("btn-primary");
			enter.classList.add("btn-danger");
			ind.innerText = "Le nombre est trop grand.";
		} else {
			enter.classList.remove("btn-primary");
			enter.classList.remove("btn-danger");
			enter.classList.add("btn-success");
			tentatives.innerText = `Il te restait ${chances} chances.`;
			ind.innerText = "Bravo, tu as trouvé le bon nombre !";
			reset();
		}
	} else {
		alert("Nombre invalide.");
	}
}

// Ajout d'évenèments

enter.addEventListener('click', function(){
	inputNumber = document.querySelector("input");
	number = inputNumber.value;

	if (chances != 1){
		chances--;
		tentatives.innerText = `Il te reste ${chances} chances.`;

		findNumber(number);
		inputNumber.value = "";

		panel.innerHTML += `
						   <div class="w-100 border-top border-warning"></div>
						   <p class="px-3 py-1">${number}</p>
				  		   `
	}
	else{
		tentatives.innerText = `Mince.. vous avez perdu. Le numéro était ${randomNbr}.`;
		ind.innerText = "";
		reset();
	}
});
