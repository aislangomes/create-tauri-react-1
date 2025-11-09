import { StudentForm } from '@/components/register/students-register'

export function RegisterPage() {
    return <StudentForm />
}

// Necessary for react router to lazy load.
export const Component = RegisterPage
