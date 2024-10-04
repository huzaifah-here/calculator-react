import React from "react"; // Import React
import { useDispatch, useSelector } from "react-redux"; // Import hooks for Redux
import { setScreen } from "../redux/slices/screenSlice"; // Import the action creator
import CalculatorButton from "../components/CalculatorButton"; // Import CalculatorButton component

const Calculator = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  // const [screen, setScreen] = useState("0"); // Local state for the screen value
  const screenValue = useSelector((state) => state.screen.value); // Redux state for the screen value
  console.log(screenValue);
  // Function to append a number to the screen
  const appendToScreen = (value) => {
    // const newValue = screen === "0" ? value : screen + value; // Local state logic
    const newValue = screenValue === "0" ? value : screenValue + value; // Redux state logic
    dispatch(setScreen(newValue)); // Dispatch action to update the screen value
  };

  // Function to clear the screen
  const clearScreen = () => {
    // setScreen("0"); // Local state logic
    dispatch(setScreen("0")); // Dispatch action to set screen value to "0" in Redux
  };

  // Function to calculate the result
  const calculate = () => {
    try {
      // const result = eval(screen); // Local state logic
      const result = eval(screenValue); // Evaluate the screen value from Redux
      dispatch(setScreen(String(result))); // Update the screen with the result
    } catch (error) {
      // setScreen("Error"); // Local state logic
      dispatch(setScreen("Error")); // Handle errors by setting screen to "Error" in Redux
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Calculator
          </h1>
          <div className="text-right text-3xl font-bold text-gray-900">
            {screenValue} {/* Display the current screen value from Redux */}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Create buttons for numbers 7, 8, and 9 */}
          {["7", "8", "9"].map((num) => (
            <CalculatorButton
              key={num}
              value={num}
              onClick={() => appendToScreen(num)}
            />
          ))}
          {/* Clear button */}
          <CalculatorButton
            value="C"
            onClick={clearScreen}
            className="bg-red-400 hover:bg-red-500"
          />

          {/* Create buttons for numbers 4, 5, and 6 */}
          {["4", "5", "6"].map((num) => (
            <CalculatorButton
              key={num}
              value={num}
              onClick={() => appendToScreen(num)}
            />
          ))}
          {/* Division button */}
          <CalculatorButton
            value="/"
            onClick={() => appendToScreen("/")}
            className="bg-yellow-400 hover:bg-yellow-500"
          />

          {/* Create buttons for numbers 1, 2, and 3 */}
          {["1", "2", "3"].map((num) => (
            <CalculatorButton
              key={num}
              value={num}
              onClick={() => appendToScreen(num)}
            />
          ))}
          {/* Multiplication button */}
          <CalculatorButton
            value="*"
            onClick={() => appendToScreen("*")}
            className="bg-yellow-400 hover:bg-yellow-500"
          />

          {/* Zero button */}
          <CalculatorButton value="0" onClick={() => appendToScreen("0")} />
          {/* Equals button */}
          <CalculatorButton value="=" onClick={calculate} />
          {/* Subtraction button */}
          <CalculatorButton
            value="-"
            onClick={() => appendToScreen("-")}
            className="bg-yellow-400 hover:bg-yellow-500"
          />
          {/* Addition button */}
          <CalculatorButton
            value="+"
            onClick={() => appendToScreen("+")}
            className="bg-yellow-400 hover:bg-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator; // Export the Calculator component
