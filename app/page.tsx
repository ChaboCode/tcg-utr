export default function Home() {
  return (
    <div className="container text-center">
      <div className="row p-5"></div>
      <div className="row">
        <div className="col">
          <a href="/pokemon" className="btn btn-danger">
            Pokémon TCG
          </a>
        </div>
        <div className="col">
          <a href="/pokemon" className="btn btn-warning">
            Mona china 女神物語
          </a>
        </div>
      </div>
    </div>
  );
}
