export function Todo({ todo }) {
  const { title, description } = todo;
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
