import { Student } from '@/schemas/student.schema'
import { create } from 'zustand'

type StudentStore = {
    students: Student[]
    addStudent: (newStudent: Student) => void
    removeStudent: (student: Student) => void
    updateStudent: (updateStudent: Student) => void
}

export const useStudentStore = create<StudentStore>((set) => ({
    students: [],
    addStudent: (newStudent) =>
        set((state) => ({
            students: [...state.students, newStudent]
        })),
    removeStudent: (student) =>
        set((state) => ({
            students: state.students.filter(
                (removeStudent) => removeStudent.id !== student.id
            )
        })),
    updateStudent: (updateStudent: Student) =>
        set((state) => ({
            students: state.students.map((student) =>
                student.id === updateStudent.id ? updateStudent : student
            )
        }))
}))
