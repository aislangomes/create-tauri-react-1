import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'
import { Button } from '../ui/button'
import React from 'react'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '../ui/select'
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from '../ui/card'
import { Field, FieldGroup, FieldSet } from '../ui/field'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])
    const [rowSelection, setRowSelection] = React.useState({})
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            rowSelection
        }
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Lista de Alunos</CardTitle>
                <FieldGroup className="flex-row">
                    <Field>
                        <Input
                            placeholder="Aluno"
                            value={
                                (table
                                    .getColumn('fullname')
                                    ?.getFilterValue() as string) ?? ''
                            }
                            onChange={(event) =>
                                table
                                    .getColumn('fullname')
                                    ?.setFilterValue(event.target.value)
                            }
                            className="flex w-full"
                        />
                    </Field>
                    <Field>
                        <Select
                            onValueChange={(value: string) =>
                                table.getColumn('shift')?.setFilterValue(value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Período" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Manhã">Manhã</SelectItem>
                                    <SelectItem value="Tarde">Tarde</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <Select
                            onValueChange={(value) =>
                                table.getColumn('class')?.setFilterValue(value)
                            }
                        >
                            <SelectTrigger className="min-w-44 mr-4">
                                <SelectValue placeholder="Turma" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Segunda-Feira">
                                        Segunda-Feira
                                    </SelectItem>
                                    <SelectItem value="Terça-Feira">
                                        Terça-Feira
                                    </SelectItem>
                                    <SelectItem value="Quarta-Feira">
                                        Quarta-Feira
                                    </SelectItem>
                                    <SelectItem value="Quinta-Feira">
                                        Quinta-Feira
                                    </SelectItem>
                                    <SelectItem value="Sexta-Feira">
                                        Sexta-Feira
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <Select
                            onValueChange={(value) =>
                                table.getColumn('arch')?.setFilterValue(value)
                            }
                        >
                            <SelectTrigger className="min-w-44 mr-4">
                                <SelectValue placeholder="Arco" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Administrativo">
                                        Administrativo
                                    </SelectItem>
                                    <SelectItem value="Tecnologia">
                                        Tecnologia
                                    </SelectItem>
                                    <SelectItem value="Comércio">
                                        Comércio
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <Input
                            placeholder="Filtrar Empresa"
                            value={
                                (table
                                    .getColumn('employer')
                                    ?.getFilterValue() as string) ?? ''
                            }
                            onChange={(event) =>
                                table
                                    .getColumn('employer')
                                    ?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm ml-4"
                        />
                    </Field>
                    <Button
                        type="button"
                        onClick={() => {
                            table.getColumn('student')?.clearSorting()
                        }}
                    >
                        Limpar
                    </Button>
                </FieldGroup>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Anterior
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Próxima
                </Button>

                {/* Verificar se é assim mesmo */}
                <Select
                    onValueChange={(e) => {
                        table.setPageSize(Number(e))
                    }}
                >
                    <SelectTrigger className="min-w-44 mr-4">
                        <SelectValue placeholder="Linhas" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </CardFooter>
        </Card>
    )
}
