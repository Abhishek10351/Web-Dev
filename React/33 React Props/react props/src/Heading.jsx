export default function Heading({ color = "slateblue", text, fontSize="24px" }) {
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;
}
