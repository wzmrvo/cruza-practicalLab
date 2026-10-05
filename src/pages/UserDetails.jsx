import ErrorMessage from '../components/ErrorMessage.jsx'

function UserDetails({ user, onNavigate }) {
  if (!user) {
    return (
      <main className="content-page">
        <ErrorMessage message="We couldn't find that user." />
        <a
          className="text-link"
          href="/users"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/users')
          }}
        >
          Back to users
        </a>
      </main>
    )
  }

  return (
    <main className="content-page">
      <a
        className="text-link"
        href="/users"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('/users')
        }}
      >
        ← Back to users
      </a>
      <p className="page-eyebrow">User details</p>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Company:</strong> {user.company}
      </p>
    </main>
  )
}

export default UserDetails
