export function generateUniqueId() {
  var int = Math.floor(Math.random() * (999999999 - 1 + 1)) + 1;

  return int.toString(36);
}
