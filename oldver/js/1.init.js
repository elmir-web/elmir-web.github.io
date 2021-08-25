window.onload = function () {
	// let tempCurrentDate = new Date();
	// let tempCurrentMonth = (tempCurrentDate.getMonth() + 1);
	// let tempCurrentDay = tempCurrentDate.getUTCDate();
	// let tempStrHumanAge;

	// if (tempCurrentDay >= 14 && tempCurrentMonth >= 10)
	// 	tempStrHumanAge = 'Возраст: ' + (tempCurrentDate.getFullYear() - 1997) + ' года';
	// else tempStrHumanAge = 'Возраст: ' + (tempCurrentDate.getFullYear() - 1997 - 1) + ' года';

	// document.getElementById('human-age').innerHTML = tempStrHumanAge;

	let tempAge = getMyAgeInYears('1997-10-14').toString();

	document.getElementById('human-age').innerHTML = 'Возраст: ' + tempAge + ' ' + (tempAge[1] == 1 ? 'год' : ((tempAge[1] > 1 && tempAge[1] < 5) ? 'года' : 'лет')); // (((tempAge[1] > 4 && tempAge[1] <= 9) || tempAge[1] == 0) ? 'лет' : 'fsdfsdfdsf')

	/////////////////////////////////////////////////////////////////////////////

	document.getElementById('summary-image-id').addEventListener('click', () => {
		document.getElementById('summary-popap-id').style.display = 'block';
	});

	document.getElementById('summary-popap-close').addEventListener('click', () => {
		document.getElementById('summary-popap-id').style.display = 'none';
	});
	return 0;
}

function getMyAgeInYears(birthStr) {
	// получаем дату из строки которую передали в функцию
	const birthDate = new Date(birthStr);
	// получаем сегодняшнюю дату
	const todayDate = new Date();
	// для удобства создаем объект рождения
	const birth = {
		// получаем полный год рождения
		year: birthDate.getFullYear(),
		// получаем месяц рождения
		month: birthDate.getMonth(),
		// получаем число рождения
		day: birthDate.getDate(),
	};
	// для удобства создаем объект сегодня
	const today = {
		// получаем полный год сегодняшней даты
		year: todayDate.getFullYear(),
		// получаем месяц сегодняшней даты
		month: todayDate.getMonth(),
		// получаем день сегодняшней даты
		day: todayDate.getDate(),
	};
	// Получаем количество прожитых лет, вычитая из текущего года, год рождения
	let myAgeInYears = today.year - birth.year;
	// надо проверить, был в этом году уже день рождения или нет? 
	// проверку выносим в функцию, чтобы читалось лучше, для удобства
	// в функцию передаем объекты рождения и сегодня
	// если дня рождения в этом году ещё не было, функция вернет false
	// у нас перед её вызовом стоит ! а значит мы перевернем этот false в тру и условие выполнится
	// при выполнении условия мы вычтем один год, так как текущий нам не нужен.
	// если день рождения был, функция вернет true, ! перевернет это в false и условие не выполнится
	if (!isMyBirthDayWasInThisYear(birth, today)) myAgeInYears--;
	// возвращаем количество лет
	return myAgeInYears;
}
// функция проверки дня рождения в этом году
function isMyBirthDayWasInThisYear(birth, today) {
	// если текущий месяц больше месяца рождения - значит день рождения точно был, возвращаем true
	if (today.month > birth.month) return true;
	// раз мы здесь значит прошлое условие не сработало
	// если текущий месяц меньше месяца рождения - значит дня рождения точно не было, возвращаем false
	if (today.month < birth.month) return false;
	// раз мы здесь, значит предыдущие условия не сработали
	// это значит, что текущий месяц равен месяцу рождения
	// в этом случа мы проверяем число
	// если сегодняшнее число больше или равно числу рождения, значит оно уже было - возвращаем true
	if (today.day >= birth.day) return true;
	// раз мы здесь, значит предыдущие условия не сработал
	// это значит, что текущий месяц равен месяцу рождения
	// и что текущее число меньше числа рождения
	// значит не было ещё дня рождения - возвращаем false
	return false;
}