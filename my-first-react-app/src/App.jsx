const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
    <h2>Functional Arrows</h2>

    <Card title="Star Wars" />
    <Card title="Avatar" />
    <Card title="Lion King" />
    </div>
  )
}

export default App
