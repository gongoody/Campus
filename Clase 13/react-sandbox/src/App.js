import './App.css';

function App() {
  const shopName = 'shopName'
  const name = 'Verduleria Homero'
  return (
    <div className='container'>
      <h1 id={shopName}>{name}</h1>
      <p>La mejor de Springfield</p>
      <ul>
        <li>
          <button onClick={event => alert(event.target.id)}>
            <span role='img' aria-label='frutilla' id= 'frutilla'>🍓</span>
          </button>
        </li>
        <li>
          <button onClick={event => alert(event.target.id)}>
            <span role='img' aria-label='palta' id= 'palta'>🥑</span>
          </button>
        </li>
        <li>
          <button onClick={event => alert(event.target.id)}>
            <span role='img' aria-label='zanahoria' id= 'zanahoria'>🥕</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App;
