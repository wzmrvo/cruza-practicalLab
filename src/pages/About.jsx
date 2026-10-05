function About({ onNavigate }) {
  return (
    <main className="content-page">
      <p className="page-eyebrow">About</p>
      <h1>A simple place to stay connected.</h1>
      <p>
        Cruza Directory helps you explore people, find their contact details,
        and mark the users you want to keep close.
      </p>
      <a
        className="text-link"
        href="/users"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('/users')
        }}
      >
        Meet the users →
      </a>
    </main>
  )
}

export default About
