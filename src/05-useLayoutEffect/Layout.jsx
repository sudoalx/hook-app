import { useState } from "react";
import { useFetch } from "../hooks";
import { useCounter } from "../hooks";
import { LoadingCard } from "../03-examples/components/LoadingCard";
import { Card } from "../03-examples/components/Card";

const Layout = () => {
  const max = 826;
  const { counter, increment, decrement } = useCounter(1, max);
  const [increaseValue, setIncreaseValue] = useState(1);
  const [decreaseValue, setDecreaseValue] = useState(1);
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
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
          setIncreaseValue={setIncreaseValue}
          setDecreaseValue={setDecreaseValue}
        />
      )}
    </>
  );
};

export default Layout;
