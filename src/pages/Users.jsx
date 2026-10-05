import { useState } from 'react'
import Button from '../components/Button.jsx'
import UserCard from '../components/UserCard.jsx'
import './Users.css'

function Users({ users, onToggleFavorite, onClearFavorites, onNavigate }) {
  const [search, setSearch] = useState('')
  const favoriteCount = users.filter((user) => user.isFavorite).length
  const normalizedSearch = search.trim().toLowerCase()
  const filteredUsers = users.filter((user) =>
    [user.name, user.email, user.company].some((value) =>
      value.toLowerCase().includes(normalizedSearch),
    ),
  )

  return (
    <main className="users-page">
      <header className="users-page__header">
        <div>
          <p className="users-page__eyebrow">Directory</p>
          <h1>Users</h1>
          <p className="users-page__summary">
            {users.length} people · {favoriteCount} favorites
          </p>
        </div>
        <Button
          label="Clear favorites"
          onClick={onClearFavorites}
          variant="danger"
        >
          <span aria-hidden="true">×</span>
        </Button>
      </header>

      <div className="users-search">
        <label htmlFor="user-search">Search users</label>
        <input
          id="user-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, email, or company"
        />
      </div>

      <section className="users-list" aria-label="Users">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={user.isFavorite}
              onToggleFavorite={() => onToggleFavorite(user.id)}
              onNavigate={onNavigate}
            />
          ))
        ) : (
          <p className="users-empty" role="status">
            No users match “{search}”.
          </p>
        )}
      </section>
    </main>
  )
}

export default Users
