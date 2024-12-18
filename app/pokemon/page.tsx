export default async function Home() {
  const result = await fetch('https://api.pokemontcg.io/v2/cards/')
  console.log(result)

  return (
    <div className="container-fluid p-4">
      <form action="">
        <div className="input-group">
          <input
            type="text"
            name="pokemon"
            id="pokemon"
            className="form-control"
            placeholder="Buscar Pokémon por nombre (Gardevoir ex, Charizard Teracristal...)"
          />
          <button className="btn btn-outline-primary">Buscar</button>
        </div>
      </form>
    </div>
  );
}
