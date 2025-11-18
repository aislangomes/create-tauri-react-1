import { MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { useStudentStore } from '@/store/useStudentStore-plugin'
import { Student } from '@/schemas/student.schema'

type RowActionsProps = {
    student: Student
}

export function RowActions({ student }: RowActionsProps) {
    const removeStudent = useStudentStore((state) => state.removeStudent)
    const handleDelete = () => {
        console.log(student.id)
        removeStudent(student)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="h8 w-8 p-0">
                    <span className="sr-only">Opções</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(Students.id)}
                >
                    Copiar ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem
                    className="text-red-600 hover:text-red-800 focus:text-red-800"
                    onClick={handleDelete}
                >
                    Deletar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
