import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h1 className="text-5xl font-bold">
          Personal Book Manager
        </h1>

        <p className="mt-6 text-gray-600">
          Organize your books beautifully.
        </p>
      </div>
    </>
  );
}