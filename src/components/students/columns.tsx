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
import { useStudentStore } from '@/store/useStudentStore-plugin'
import { RowActions } from './options-cell'

export type Students = {
    id: string
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
        cell: ({ row }) => <RowActions student={row.original} />
    }
]
