import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'
import Pokedex from './pages/Pokedex'



const queryClient = new QueryClient();
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>

      <Pokedex/>
    </QueryClientProvider>
    </>
  )
}

export default App
