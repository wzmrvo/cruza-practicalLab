import { useState } from 'react'
import Button from '../components/Button.jsx'
import UserCard from '../components/UserCard.jsx'
import initialUsers from '../data/users.js'
import './Users.css'

function Users() {
  const [users, setUsers] = useState(initialUsers)
  const favoriteCount = users.filter((user) => user.isFavorite).length

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
          onClick={clearFavorites}
          variant="danger"
        >
          <span aria-hidden="true">×</span>
        </Button>
      </header>

      <section className="users-list" aria-label="Users">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company}
            isFavorite={user.isFavorite}
            onToggleFavorite={() => toggleFavorite(user.id)}
          />
        ))}
      </section>
    </main>
  )
}

export default Users
