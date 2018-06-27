"use strict"; // Используем ужесточенные правила интерпретатора

// Функция определяет, является ли значение числом
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var userName;
// Действие происходит при нажатии на кнопку +
function buttonClick() {
    userName = prompt('Для приличия спрошу тебя о том, как тебя зовут', 'Денис');
    alert('Пошел нахой, ' + userName);
}

var num;
// Действие срабатывает при нажатии на кнопку "Не жми на меня"
function stopClick() {
	num = prompt('Введите число', '2');
	if (isNumeric(num)) {
	    num = +num;
		alert('Короч, я знаю, что если добавить к твоему числу 12, то мы получим ' + (num + 12) + '. А если умножить на 8, то вообще такая херня будет: ' + (num * 8));
	} else {
		alert('Попробуйте ввести число');
		stopClick();
	}
}
