export default function StringFormatter(string) {
  return string.replace(/'/g, "\\'");
}
