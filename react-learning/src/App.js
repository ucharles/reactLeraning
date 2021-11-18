import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
function SearchCoinName() {}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins ({coins.length})</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
