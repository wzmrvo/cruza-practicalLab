function NotFound({ onNavigate }) {
  return (
    <main className="content-page">
      <p className="page-eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist or may have moved.</p>
      <a
        className="text-link"
        href="/"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('/')
        }}
      >
        Return home
      </a>
    </main>
  )
}

export default NotFound
