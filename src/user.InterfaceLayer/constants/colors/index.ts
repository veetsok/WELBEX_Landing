enum Colors {
  BODY = "#0E1014",
  RED = "#EC2020",
  DEFAULT = "#E4E5EA",
  GRAY = "#656566",
  TRANSPARENT = "transparent",
}

export default Colors;

const root = document.documentElement;

root.style.setProperty("--body-color", Colors.BODY);
