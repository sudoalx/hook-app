import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { name, species, image } = !!data && data;

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />
      {hasError && (
        <div className="alert alert-danger" role="alert">
          Error: {hasError.message}
        </div>
      )}
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "80vh" }}
        >
          <div className="card text-center mx-auto">
            <img src={image} className="card-img-top img-fluid" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{species}</p>
            </div>
            <div className="d-grid gap-1 m-1">
              <button
                className="btn btn-primary"
                type="button"
                disabled={isLoading}
                onClick={() => decrement(1)}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                type="button"
                disabled={isLoading}
                onClick={() => increment(1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultipleCustomHooks;
