

function getBanglaDate(dateInput = new Date()) {
  const date = new Date(dateInput);

  const weekday = date.toLocaleDateString('bn-BD', { weekday: 'short' }); // বুধ
  const day = date.toLocaleDateString('bn-BD', { day: 'numeric' });       // ১৪
  const month = date.toLocaleDateString('bn-BD', { month: 'long' });      // মে
  const year = date.toLocaleDateString('bn-BD', { year: 'numeric' });     // ২০২৫

  return `${weekday}, ${day}ই ${month}, ${year}`;
}

export default getBanglaDate;