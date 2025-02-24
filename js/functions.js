// Функция для проверки длины строки
const checkLengthString = function (string, length) {
  return string.length <= length;
};

// Функция для проверки на палиндром
const checkStringPalindrom = function (string) {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let reversString = '';
  for (let i = normalizeString.length - 1; i >= 0; i -= 1) {
    reversString += normalizeString[i];
  }
  return reversString === normalizeString;
};

// Функция для извлечения и преобразования строки в число
const stringToNumber = function (string) {
  const result = typeof string === 'number' ? string.toString() : string;
  const extractNumber = result.match(/\d/g);
  if (!extractNumber) {
    return NaN;
  }
  return parseInt(extractNumber.join(''), 10);
};

// Дополнительное задание в разделе 5
/*
Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/

const bestQuestion = function (beginWorkTime, endWorkTime, startMeetTime, durationMeetTime) {

  const getTimePoint = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkMinutes = getTimePoint(beginWorkTime);
  const endWorkMinutes = getTimePoint(endWorkTime);
  const startMeetMinutes = getTimePoint(startMeetTime);
  const meetEndMinutes = startMeetMinutes + durationMeetTime;


  if (startWorkMinutes <= startMeetMinutes && meetEndMinutes <= endWorkMinutes) {
    return true;
  } {
    return false;
  }

};
console.log(bestQuestion('08:00', '17:30', '14:00', 90));
console.log(bestQuestion('8:0', '10:0', '8:0', 120));
console.log(bestQuestion('08:00', '14:30', '14:00', 90));
console.log(bestQuestion('14:00', '17:30', '08:0', 90));
console.log(bestQuestion('8:00', '17:30', '08:00', 900));



// Доп задание от Наставника
// функция,Которая принимает номер квартиры и количество этажей и количество квартир на этаже
// узнать подъезд и этаж
// 1. Считает квартир в подъезде (apartmentsEntrance)
// 2. В каком подъезде квартира (entrance)
// 3. На каком этаже квартира (positionInEntrance)

const whatEntranceAndFloor = function (roomNumber, numberFloors, apartmentsPerFloor) {
  if (roomNumber <= 0 || numberFloors <= 0 || apartmentsPerFloor <= 0) {
    return "Данные не правильные";
  }
  const apartmentsEntrance = numberFloors * apartmentsPerFloor;
  const entrance = Math.ceil(roomNumber / apartmentsEntrance);
  const positionInEntrance = roomNumber - (entrance - 1) * apartmentsEntrance;
  const floor = Math.ceil(positionInEntrance / apartmentsPerFloor);

  return `Квартира находится в ${entrance} подъезде на ${floor} этаже.`;
};


console.log(whatEntranceAndFloor(49, 5, 10));
