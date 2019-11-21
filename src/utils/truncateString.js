export function truncateString(string, maxLength) {
  if (string.length > maxLength) return string.substring(0, maxLength) + '...';
  else return string;
}
