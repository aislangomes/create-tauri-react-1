import { Students, columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Students[]> {
    return [
        {
            id: '1',
            student: 'Aislan',
            employer: 'Elevar',
            class: 'Segunda-Feira',
            shift: 'Manhã',
            arch: 'Administrativo'
        },
        {
            id: '2',
            student: 'Cesar',
            employer: 'Eduzz',
            class: 'Terça-Feira',
            shift: 'Tarde',
            arch: 'Financeiro'
        },
        {
            id: '3',
            student: 'Daniel',
            employer: 'Hotmart',
            class: 'Quarta-Feira',
            shift: 'Tarde',
            arch: 'Comercial'
        },
        {
            id: '4',
            student: 'Eduardo',
            employer: 'Monetizze',
            class: 'Quinta-Feira',
            shift: 'Manhã',
            arch: 'Marketing'
        },
        {
            id: '5',
            student: 'Fernando',
            employer: 'Kiwify',
            class: 'Sexta-Feira',
            shift: 'Tarde',
            arch: 'Tecnologia'
        },
        {
            id: '6',
            student: 'Gustavo',
            employer: 'Hotmart',
            class: 'Segunda-Feira',
            shift: 'Tarde',
            arch: 'Administrativo'
        },
        {
            id: '1',
            student: 'Aislan',
            employer: 'Elevar',
            class: 'Segunda-Feira',
            shift: 'Manhã',
            arch: 'Administrativo'
        },
        {
            id: '2',
            student: 'Cesar',
            employer: 'Eduzz',
            class: 'Terça-Feira',
            shift: 'Tarde',
            arch: 'Financeiro'
        },
        {
            id: '3',
            student: 'Daniel',
            employer: 'Hotmart',
            class: 'Quarta-Feira',
            shift: 'Tarde',
            arch: 'Comercial'
        },
        {
            id: '4',
            student: 'Eduardo',
            employer: 'Monetizze',
            class: 'Quinta-Feira',
            shift: 'Manhã',
            arch: 'Marketing'
        },
        {
            id: '5',
            student: 'Fernando',
            employer: 'Kiwify',
            class: 'Sexta-Feira',
            shift: 'Tarde',
            arch: 'Tecnologia'
        },
        {
            id: '6',
            student: 'Gustavo',
            employer: 'Hotmart',
            class: 'Segunda-Feira',
            shift: 'Tarde',
            arch: 'Administrativo'
        }
    ]
}

export default async function StudentsPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
