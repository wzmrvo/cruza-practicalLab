import Button from './Button.jsx'

function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
  onNavigate,
}) {
  return (
    <article className="user-card">
      <div className="user-card__details">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{company}</p>
        <a
          className="user-card__link"
          href={`/users/${id}`}
          onClick={(event) => {
            event.preventDefault()
            onNavigate(`/users/${id}`)
          }}
        >
          View Details
        </a>
      </div>
      <Button
        label={isFavorite ? 'Unfavorite' : 'Favorite'}
        onClick={onToggleFavorite}
        variant={isFavorite ? 'danger' : 'primary'}
      >
        <span aria-hidden="true">{isFavorite ? '★' : '☆'}</span>
      </Button>
    </article>
  )
}

export default UserCard
