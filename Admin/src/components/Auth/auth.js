import axios from "axios";

export const handleSignIn = async (
  username,
  password,
  setAuthenticated,
  setError,
  navigate
) => {
  try {
    // Simulate successful login for testing purposes
    // In a real application, you would perform actual authentication here
    const simulatedToken = "test-token"; // Replace with a real token if needed

    // Simulate a successful response
    if (true) { // Always true for testing purposes
      setError("");
      localStorage.setItem("token", simulatedToken);
      setAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  } catch (error) {
    console.error("Error signing in:", error);
    setError("An error occurred while signing in");
  }
};