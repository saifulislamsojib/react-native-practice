import { useEffect, useState } from "react";
import { AppState } from "react-native";

const useAppState = () => {
  const [appState, setAppState] = useState(() => AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      setAppState(state);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

export default useAppState;
