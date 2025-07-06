import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";

export function useWarmUpBrowser() {
  useEffect(() => {
    // Warm up the browser on mount
    WebBrowser.warmUpAsync();

    return () => {
      // Cool down the browser on unmount
      WebBrowser.coolDownAsync();
    };
  }, []);
}