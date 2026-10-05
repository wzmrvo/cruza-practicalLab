function Button({ label, onClick, variant, children }) {
  return (
    <button
      type="button"
      className={`app-button app-button--${variant}`}
      aria-label={label}
      onClick={onClick}
    >
      <span>{label}</span>
      {children}
    </button>
  )
}

export default Button
