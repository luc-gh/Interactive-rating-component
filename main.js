let btns = document.getElementsByClassName('botao');

console.log(btns);

let v = -1;

for(let i = 0; i < btns.length; i++){   //user selection (buttons)
	btns[i].addEventListener("click", () => {
		
		v = btns[i].textContent;

		if(v != -1){
			for(k of btns){
				if(k.textContent != v){
					k.classList.remove('selecionado');
				}
				else{
					k.classList.add('selecionado');
				}
			}
		}
	});
}


let s = document.getElementById('submit');
let bloco = document.querySelector('.bloco');
let agradecimento = document.querySelector('.agradecimento');
let submissao = document.getElementById('submissao');

s.onclick = () => {  //user response (submit)
	if(v == -1){
		alert("Select one of the numbers, please.")
	}
	else{
		bloco.style.display = "none";
		agradecimento.style.display = "flex";
		submissao.innerHTML = "You selected " + v + " out of 5"
	}	
};
