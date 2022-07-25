import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Sup, {user ? user.name : 'duck?'}</h1>
    </main>
  )
}

export default Landing
