export default function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="font-bold text-xl">REACT APP</h1>
        <ul className="flex gap-6 uppercase font-medium">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Heading */}
      <header className="text-center mt-12 mb-8">
        <h2 className="text-4xl font-bold">Welcome </h2>
      </header>

      {/* Cards */}
      <main className="flex-1 px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Card 1</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Card 3</h3>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4 mt-12">
        <p>&copy; 2026 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}
