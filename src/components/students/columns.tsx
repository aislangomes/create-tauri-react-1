import { ColumnDef } from '@tanstack/react-table'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'

export type Students = {
    id: string | number
    fullname: string
    employer: '' | 'empresa1' | 'empresa2'
    class:
        | ''
        | 'Segunda-Feira'
        | 'Terça-Feira'
        | 'Quarta-Feira'
        | 'Quinta-Feira'
        | 'Sexta-Feira'
    shift: '' | 'Manhã' | 'Tarde'
    arch: string
}

export const columns: ColumnDef<Students>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Selecionar todos os alunos da página"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label={`Selecionar aluno ${row.original.fullname}`}
            />
        )
    },
    {
        accessorKey: 'fullname',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Aluno
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: 'employer',
        header: 'Empresa'
    },
    {
        accessorKey: 'class',
        header: 'Turma'
    },
    {
        accessorKey: 'shift',
        header: 'Período'
    },
    {
        accessorKey: 'arch',
        header: 'Arco'
    },
    {
        id: 'options',
        cell: ({ row }) => {
            const Students = row.original
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
                            onClick={() =>
                                navigator.clipboard.writeText(Students.id)
                            }
                        >
                            Copiar ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 hover:text-red-800 focus:text-red-800">
                            Deletar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
