import Products from "./components/Products";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Tech Products
      </h1>

      <Products />
    </div>
  );
}

export default App;