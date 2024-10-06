// Функция для проверки длины строки
const checkLengthString = function(string, length) {
  return string.length <= length;
};

// Функция для проверки на палиндром
const checkStringPalindrom = function(string) {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let reversString = '';
  for (let i = normalizeString.length - 1; i >= 0; i -= 1) {
    reversString += normalizeString[i];
  }
  return reversString === normalizeString;
};

// Функция для извлечения и преобразования строки в число
const stringToNumber = function(string) {
  const result = typeof string === 'number' ? string.toString() : string;
  const extractNumber = result.match(/\d/g);
  if (!extractNumber) {
    return NaN;
  }
  return parseInt(extractNumber.join(''), 10);
};

