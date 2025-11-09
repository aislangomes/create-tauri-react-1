import { Plus } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
    return (
        <header className="w-full p-4 bg-gray-800 text-white text-center flex justify-center items-center gap-4">
            <h1 className="text-2xl font-bold">Gerador de listas</h1>
            <Button className="mt-2 ml-auto" asChild>
                <a href="/register">Gerenciar Listas</a>
            </Button>
            <Button className="mt-2">
                <a href="/lista" className="flex items-center gap-2">
                    Cadastrar <Plus />
                </a>
            </Button>
        </header>
    )
}
