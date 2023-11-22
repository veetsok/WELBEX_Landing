enum Colors {
  BODY = "#0E1014",
  RED = "#961a1a",
  DEFAULT = "#E4E5EA",
  GRAY = "#656566",
  TRANSPARENT = "transparent",
  BLUE = "#4077f3",
  PURPLE = "#833ab4",
}

export default Colors;

const root = document.documentElement;

root.style.setProperty("--body-color", Colors.BODY);
