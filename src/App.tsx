import OnClickErrorExample from "./components/onClickErrorExample";
import ErrorExample from "./components/useEffectErrorExample";

function App() {
  return (
    <main className="m-10">
      <h1 className="underline">Hello world</h1>

      <div className="mt-5">
        <p>once the number gets to 2 an error will be thrown</p>
        <OnClickErrorExample />

        <ErrorExample />
      </div>
    </main>
  );
}

export default App;
