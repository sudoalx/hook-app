import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import { LoadingCard } from "./components/LoadingCard";
import { Card } from "./components/Card";

const MultipleCustomHooks = () => {
  const max = 826;
  const { counter, increment, decrement } = useCounter(1, max);
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
        <LoadingCard />
      ) : (
        <Card
          image={image}
          name={name}
          species={species}
          decrement={decrement}
          increment={increment}
          counter={counter}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default MultipleCustomHooks;
