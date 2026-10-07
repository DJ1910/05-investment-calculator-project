export default function UserInput({ children, id, changeHandler, value }) {
  return (
    <p>
      <label htmlFor={id}>{children}</label>
      <input
        type="number"
        onChange={changeHandler}
        value={value}
        id={id}
        required
      />
    </p>
  );
}
