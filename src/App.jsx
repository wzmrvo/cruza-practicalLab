import { useEffect, useState } from 'react'
import './App.css'
import Users from './pages/Users.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import UserDetails from './pages/UserDetails.jsx'
import NotFound from './pages/NotFound.jsx'
import initialUsers from './data/users.js'

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [path, setPath] = useState(window.location.pathname)
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )
  const favoriteCount = users.filter((user) => user.isFavorite).length

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(nextPath) {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  function toggleFavorite(id) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user,
      ),
    )
  }

  function clearFavorites() {
    setUsers((currentUsers) =>
      currentUsers.map((user) => ({ ...user, isFavorite: false })),
    )
  }

  const detailMatch = path.match(/^\/users\/(\d+)\/?$/)
  const selectedUser = detailMatch
    ? users.find((user) => user.id === Number(detailMatch[1]))
    : null

  function navigateFromLink(event, nextPath) {
    event.preventDefault()
    navigate(nextPath)
  }

  return (
    <>
      <header className="site-header">
        <a
          className="site-header__brand"
          href="/"
          onClick={(event) => navigateFromLink(event, '/')}
        >
          Cruza Directory
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="/" aria-current={path === '/' ? 'page' : undefined} onClick={(event) => navigateFromLink(event, '/')}>
            Home
          </a>
          <a href="/users" aria-current={path === '/users' ? 'page' : undefined} onClick={(event) => navigateFromLink(event, '/users')}>
            Users
          </a>
          <a href="/about" aria-current={path === '/about' ? 'page' : undefined} onClick={(event) => navigateFromLink(event, '/about')}>
            About
          </a>
          <span className="favorites-count" aria-live="polite">
            Favorites <strong>{favoriteCount}</strong>
          </span>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === 'dark' ? 'light' : 'dark',
              )
            }
          >
            {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
          </button>
        </nav>
      </header>

      {path === '/' ? (
        <Home favoriteCount={favoriteCount} onNavigate={navigate} />
      ) : path === '/about' ? (
        <About onNavigate={navigate} />
      ) : path === '/users' ? (
        <Users
          users={users}
          onToggleFavorite={toggleFavorite}
          onClearFavorites={clearFavorites}
          onNavigate={navigate}
        />
      ) : detailMatch ? (
        <UserDetails user={selectedUser} onNavigate={navigate} />
      ) : (
        <NotFound onNavigate={navigate} />
      )}
    </>
  )
}

export default App
