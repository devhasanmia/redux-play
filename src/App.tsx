import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 animate-fade-in-down">Counter with Redux</h1>

      <div className="bg-white rounded-3xl shadow-xl p-10 w-80 text-center animate-fade-in-up transition-all duration-500">
        <button onClick={handleIncrement} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 mb-6 shadow-md">
          Increment
        </button>

        <h1 className="text-6xl font-extrabold text-gray-800 my-6 transition-all duration-500 animate-pulse">
         {count}
        </h1>

        <button onClick={handleDecrement} className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
