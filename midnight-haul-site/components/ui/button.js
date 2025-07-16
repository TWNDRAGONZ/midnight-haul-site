export function Button({ children, ...props }) {
  return (
    <button {...props} className={`text-white px-4 py-2 rounded ${props.className || ''}`}>
      {children}
    </button>
  );
}