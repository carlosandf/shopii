// Función para obtener el nombre del mes
function getMonthName (indexMonth) {
  const monthsName = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ];

  return monthsName[indexMonth];
}

// Función para agregar un cero a los minutos si son menores a 10
function addCero (num) {
  return num < 10 ? '0' + num : num;
}

export function dateFormat (date) {
  // Obtener componentes de la fecha
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutos = addCero(date.getMinutes());
  const seconds = date.getSeconds();
  const amOrPm = hours >= 12 ? 'p.m.' : 'a.m.';

  // Ajustar la hora al formato de 12 horas
  if (hours > 12) {
    hours -= 12;
  }

  // Formatear el resultado
  return `${day} de ${month}. ${year} - ${hours}:${minutos}:${seconds} ${amOrPm}`;
}
