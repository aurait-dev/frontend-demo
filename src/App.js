import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => {
        if (!res.ok) throw new Error("Backend not reachable");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Frontend → Backend Test</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data ? (
        <div>
          <p><b>Message:</b> {data.message}</p>
          <p><b>Time:</b> {data.time}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
