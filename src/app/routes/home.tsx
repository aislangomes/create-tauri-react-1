import { StudentForm } from '@/components/register/students-register'

export function HomePage() {
    return (
        <>
            {/* <header className='bg-blue-500 p-4 flex items-center gap-1 absolute w-full'>
                <h1 className='text-3xl mr-auto'>Gerenciador de listas</h1>
                <button className='bg-amber-300 p-2 rounded-2xl'>Listas de alunos</button>
                <button className='bg-amber-300 p-2 rounded-2xl'>Cadastrar</button>
            </header>
            <main className='grid grid-flow-col gap-5 h-screen p-2.5 mt-7'>
                <div className='bg-red-500 row-span-3 col-span-3'>01</div>
                <div className='bg-red-700 row-span-2'>02</div>
                <div className='bg-red-200'>03</div>
            </main> */}
            <StudentForm />
        </>
    )
}

// Necessary for react router to lazy load.
export const Component = HomePage
