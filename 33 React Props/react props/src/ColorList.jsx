export default function ColorList({ colors }) {
  return (
    <div>
      <p>Color List</p>
      <ul>
        {colors.map((c) => (
          <li key={c} style={{color: c}}>{c}</li>
        ))}
      </ul>
    </div>
  );
}