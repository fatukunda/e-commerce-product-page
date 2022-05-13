import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Product from "./pages/product";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="relative min-h-screen bg-white lg:grid lg:grid-rows-[1fr_auto]">
      <div className="mx-auto max-w-6xl">
        <AppHeader />
        <main className="lg:mt-20 lg:flex lg:items-center lg:justify-center lg:gap-24 lg:px-12">
          <Slider />
          <Product />
        </main>
      </div>

      <AppFooter />
    </div>
  );
}

export default App;
