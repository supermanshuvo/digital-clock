import ClockTime from "./ClockTime";
import DateDay from "./DateDay";

function App() {
  return (
    <div className="container">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
        <div
            class="
              bg-indigo-800
              text-white
              font-extrabold
              p-5
              mb-2
              text-3xl
              sm:text-6xl
              shadow-lg shadow-indigo-500/50
            "
          >
            <h3>Superman Shuvo</h3>
          </div>
          <ClockTime />
          <DateDay />
        </div>
      </div>
    </div>
  );
}

export default App;
