import letsStart from '@/assets/lets-start.svg'
import logo from '@/assets/logo-in-orbit.svg'
import { Plus } from 'lucide-react'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="logo in-orbit" />
      <img src={letsStart} alt="lets start illustration" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <Button>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </div>
  )
}

export default App
