'use client'

import { useStudentStore } from '@/store/useStudentStore'
import { Students, columns } from './columns'
import { DataTable } from './data-table'
import { useEffect, useState } from 'react'

export default function StudentPage() {
    const { students } = useStudentStore()
    const [data, setData] = useState<Students[]>([])
    useEffect(() => {
        console.log(students)
        const mapped = students.map((student) => ({
            id: student.id,
            fullname: student.fullname,
            employer: student.employer,
            class: student.class,
            shift: student.shift,
            arch: student.arch
        }))
        setData(mapped)
    }, [students])

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
