function Loader({ message = 'Loading...' }) {
  return (
    <p className="status-message" role="status" aria-live="polite">
      <span className="loader-spinner" aria-hidden="true" />
      {message}
    </p>
  )
}

export default Loader
