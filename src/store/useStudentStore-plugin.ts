import { create } from 'zustand'
import { open } from '@tauri-apps/plugin-shell'
import { tauri } from '@tauri-store/zustand/dist/index.js'
import { Student } from '@/schemas/student.schema'

type StudentStore = {
    students: Student[]
    addStudent: (newStudent: Student) => void
    removeStudent: (student: Student) => void
    updateStudent: (updateStudent: Student) => void
}

export const useStudentStore = create<StudentStore>((set) => ({
    students: [],
    addStudent: (newStudent: Student) =>
        set((state) => ({
            students: [...state.students, newStudent]
        })),
    removeStudent: (student: Student) =>
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

export const tauriHandler = tauri('students', useStudentStore, {
    autoStart: true,
    saveStrategy: 'debounce',
    saveInterval: 1000,
    hooks: {
        beforeBackendSync: (state) => {
            console.log(state)
            return state
        }
    }
})

export async function openStore() {
    const path = await tauriHandler.getPath()
    await open(path)
}
