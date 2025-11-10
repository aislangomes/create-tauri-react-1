// import { studentSchema } from "@/components/register/students-register"
// import z from "zod"
// import { create } from "zustand"

// type Student = <z.infer<typeof studentSchema>>
// type StudentStore = {
//   students: Student[],
// }

// type Task = {
//   id: string,
//   text: string
// }

// type TaskStore = {
//   tasks : Task[]
// }

// export const useStudentStore = create<StudentStore>()((set) => ({
//   students: [],
//   addStudent: (newStudent:studentType) => {
//     set((state) => ({
//       students: [...state.students, newStudent]
//     }))
//   }
// }))
