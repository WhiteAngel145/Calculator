console.log('Hello Boss');
let displayEl = document.querySelector('.display');
let elementBtns = document.querySelector('#buttons');
let resultEl = document.querySelector('#result');
elementBtns.addEventListener('click', onClick);

let num1, num2, sum, operator;
function onClick(event) {
	let currentClick = event.target.textContent;
	if (event.target.tagName == 'BUTTON') {
		displayEl.value += currentClick;

		if (displayEl.value.includes('-') || displayEl.value.includes('+') || displayEl.value.includes('*') || displayEl.value.includes('/') || displayEl.value.includes('=')) {
			let num = displayEl.value;
			switch (currentClick) {
				case '/':
					num = num.split('/').join('');
					if (!num1) {
						num1 = Number(num);
					} else {
						num2 = Number(num);
					}
					operator = '/'
					break;
				case '*':
					num = num.split('*').join('');
					if (!num1) {
						num1 = Number(num);
					} else {
						num2 = Number(num);
					}
					operator = '*'
					break;
				case '-':
					num = num.split('-').join('');
					if (!num1) {
						num1 = Number(num);
					} else {
						num2 = Number(num);
					}
					operator = '-'
					break;
				case '+':
					num = num.split('+').join('');
					if (!num1) {
						num1 = Number(num);
					} else {
						num2 = Number(num);
					}
					operator = '+'
					break;
				case '=':
					num = num.split(`${num1}${operator}`).join('').split('=').join('');
					if (!num1) {
						num1 = Number(num);
					} else {
						num2 = Number(num);
					}
					break;
					
				default:
					break;
			}
		}

		if (event.target.textContent === '=') {
			switch (operator) {
				case '/':
					sum = num1 / num2;
					break;
				case '*':
					sum = num1 * num2;
					break;
				case '-':
					sum = num1 - num2;
					break;
				case '+':
					sum = num1 + num2;
					break;
										
				default:
					break;
			}
			num1 = null;
			num2 = null;
			operator = null;
			displayEl.value = '';
			resultEl.textContent = sum;
			sum = null;
			console.log(resultEl);
			
		}
	}
}
