import { useLayoutEffect, useRef } from "react"


const useUpdate = (callback: () => void, dependencies: any[]) => {
  const firstRenderRef = useRef(true);

  useLayoutEffect(() => {

    firstRenderRef.current 
    ? (firstRenderRef.current = false)
    : callback()
    
  }, [...dependencies]);
}

export default useUpdate