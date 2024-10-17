import { useEffect } from "react";

export function useKey(keyCode, handler) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === keyCode.toLowerCase()) {
          handler?.();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [handler, keyCode]
  );
}
