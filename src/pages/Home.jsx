function Home({ favoriteCount, onNavigate }) {
  return (
    <main className="home-page">
      <p className="page-eyebrow">Welcome</p>
      <h1>People, all in one place.</h1>
      <p className="home-page__intro">
        Browse the directory, learn more about the people in it, and keep track
        of your favorites.
      </p>
      <div className="home-page__actions">
        <a
          className="home-page__primary-link"
          href="/users"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/users')
          }}
        >
          Browse users
        </a>
        <span className="home-page__favorite-summary" aria-live="polite">
          You have <strong>{favoriteCount}</strong>{' '}
          {favoriteCount === 1 ? 'favorite' : 'favorites'}
        </span>
      </div>
    </main>
  )
}

export default Home
