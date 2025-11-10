import { Plus } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
    return (
        <header className="p-6 bg-amber-400 flex justify-center items-center w-full gap-4">
            <Button size="lg" className="mr-auto text-3xl" asChild>
                <a href="/" className="text-blue-950 py-5">
                    Gerenciar Listas
                </a>
            </Button>
            <Button asChild>
                <a href="/new-student" className="flex items-center gap-2">
                    Novo Aluno
                    <Plus />
                </a>
            </Button>
            <Button asChild>
                <a href="/new-employer" className="flex items-center gap-2">
                    Nova Empresa <Plus />
                </a>
            </Button>
            <Button asChild>
                <a href="/new-instructor" className="flex items-center gap-2">
                    Novo Instrutor <Plus />
                </a>
            </Button>
        </header>
    )
}
