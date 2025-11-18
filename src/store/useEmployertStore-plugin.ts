import { create } from 'zustand'
import { open } from '@tauri-apps/plugin-shell'
import { tauri } from '@tauri-store/zustand/dist/index.js'
import { Employer } from '@/schemas/employer.schema'

type EmployerStore = {
    employers: Employer[]
    addEmployer: (newEmployer: Employer) => void
    removeEmployer: (employerId: Employer) => void
    updateEmployer: (updateEmployer: Employer) => void
}

export const useEmployerStore = create<EmployerStore>((set) => ({
    employers: [],
    addEmployer: (newEmployer: Employer) =>
        set((state) => ({
            employers: [...state.employers, newEmployer]
        })),
    removeEmployer: (employerId: Employer) =>
        set((state) => ({
            employers: state.employers.filter(
                (removeEmployer) => removeEmployer.id !== employerId.id
            )
        })),
    updateEmployer: (updateEmployer: Employer) =>
        set((state) => ({
            employers: state.employers.map((employer) =>
                employer.id === updateEmployer.id ? updateEmployer : employer
            )
        }))
}))

export const tauriHandler = tauri('employers', useEmployerStore, {
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
