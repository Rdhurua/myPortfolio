
import Home from "./components/Home.jsx"
import Loader from "./components/Loader.jsx"
import { useState,useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds loading, or you can wait until assets load

    return () => clearTimeout(timer);
  }, []);

  return (

    <>

     {loading? <Loader/>:<Home/>}
    
      

    </>

  )
}

export default App
