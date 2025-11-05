import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'

const alunos = [
    {
        alunos: 'Aislan',
        empresa: 'Elevar',
        turma: 'Segunda-Feira',
        período: 'Manhã',
        arco: 'Administrativo',
        selecionado: 'Não'
    },
    {
        alunos: 'Cesar',
        empresa: 'Eduzz',
        turma: 'Terça-Feira',
        período: 'Tarde',
        arco: 'Financeiro',
        selecionado: 'Não'
    },
    {
        alunos: 'Daniel',
        empresa: 'Hotmart',
        turma: 'Quarta-Feira',
        período: 'Noite',
        arco: 'Comercial',
        selecionado: 'Sim'
    },
    {
        alunos: 'Eduardo',
        empresa: 'Monetizze',
        turma: 'Quinta-Feira',
        período: 'Manhã',
        arco: 'Marketing',
        selecionado: 'Sim'
    },
    {
        alunos: 'Fernando',
        empresa: 'Kiwify',
        turma: 'Sexta-Feira',
        período: 'Tarde',
        arco: 'Tecnologia',
        selecionado: 'Não'
    },
    {
        alunos: 'Gustavo',
        empresa: 'Hotmart',
        turma: 'Segunda-Feira',
        período: 'Noite',
        arco: 'Administrativo',
        selecionado: 'Sim'
    }
]

export function TableAlunos() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Aluno</TableHead>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Turma</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Arco</TableHead>
                    <TableHead className="text-right">Selecionado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {alunos.map((alunos) => (
                    <TableRow key={alunos.alunos}>
                        <TableCell className="font-medium">
                            {alunos.alunos}
                        </TableCell>
                        <TableCell>{alunos.empresa}</TableCell>
                        <TableCell>{alunos.turma}</TableCell>
                        <TableCell>{alunos.período}</TableCell>
                        <TableCell>{alunos.arco}</TableCell>
                        <TableCell className="text-right">
                            {alunos.selecionado}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
