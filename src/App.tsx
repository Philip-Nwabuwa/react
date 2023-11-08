import ErrorBoundary from "./ErrorBoundary";
import ErrorExample from "./components/ErrorExample";

function App() {
  const handleClick = () => {
    throw new Error("onClick Error");
  };
  return (
    <main>
      <h1 className="underline">Hello world</h1>

      <div className="mt-5">
        <ErrorBoundary>
          <div>
            <button onClick={handleClick}>Click me</button>
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorExample />
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default App;
