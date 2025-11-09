import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-pink-50 flex flex-col items-center justify-center text-gray-700 font-[Poppins]">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-96 text-center border border-pink-200">
        <h1 className="text-3xl font-bold text-pink-500 mb-2 flex items-center justify-center gap-2">
          🌷 FocusFlow
        </h1>
        <p className="mb-6 text-gray-500 italic">
          Personal to-do app is running!
        </p>
        <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-200 hover:scale-105">
          + Add New Task
        </button>
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        ☕ take a deep breath — you’re doing amazing 💗
      </footer>
    </div>
  );
}

export default App;
