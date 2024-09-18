"use client";

import { useQuery, gql, useMutation } from "@apollo/client";

const FIND_ALL_AIRCRAFT = gql`
  query {
    findAllAircraft {
      aircraftId
      aircraftType
      maxSeatCapacity
      seatLayout
    }
  }
`;

export default function Home() {
  const { loading, error, data, refetch } = useQuery(FIND_ALL_AIRCRAFT);
  // const [newThis, { data, loading, error }]= useMutation(NEW_THIS);

  if (loading) {
    return "loading...";
  }

  if (data.length === 0) {
    return "No books available.";
  }

  if (data) {
    console.log("data =: ", data.findAllAircraft);
  }

  return (
    <>
      <header>
        <h1>Gestión de aviones y vuelos</h1>
      </header>

      <main>
        {/* Section for airplanes */}
        <section className="crud-section">
          <h2>Gestión de aviones</h2>
          <form className="crud-form" id="avion-form">
            <input
              type="text"
              id="avion-tipo"
              placeholder="Tipo Avión"
              required
            />
            <input
              type="text"
              id="avion-capacidad"
              placeholder="Cantidad máxima de asientos"
              required
            />
            <input
              type="text"
              id="avion-distribucion"
              placeholder="Distribución de asientos"
              required
            />
            <button type="submit" className="btn">
              Agregar avión
            </button>
          </form>

          <table className="crud-table">
            <thead>
              <tr>
                <th>Id Aeronave</th>
                <th>Tipo Avión</th>
                <th>Cantidad máx. de asientos</th>
                <th>Distribución de asientos</th>
              </tr>
            </thead>
            <tbody>
              {/* Airplanes will be displayed here */}
              {data.findAllAircraft.map((film) => (
                <tr key={film.id}>
                  <td>{film.id.slice(-4, -1)}</td>
                  <td>{film.title}</td>
                  <td>{film.id.slice(-4, -1)}</td>
                  <td>{film.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section for flights */}
        <section className="crud-section">
          <h2>Gestión de vuelos</h2>
          <form className="crud-form" id="vuelo-form">
            <input
              type="text"
              id="vuelo-destino"
              placeholder="Destino del vuelo"
              required
            />
            <button type="submit" className="btn">
              Agregar vuelo
            </button>
          </form>

          <table className="crud-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Destino</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Flights will be displayed here  */}
              {data.allFilms.films.map((film) => (
                <tr key={film.id}>
                  <td>{film.id.slice(-4, -1)}</td>
                  <td>{film.title}</td>
                  <td>
                    <button className="btn">Editar</button>
                    <button className="btn delete">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>&copy; By Ingeniería Web Team</p>
      </footer>
    </>
  );
}
