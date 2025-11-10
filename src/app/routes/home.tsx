import { ClassThemes } from '@/components/class-themes'
import { Header } from '@/components/header'
import { StudentForm } from '@/components/register/students-register'
import { StudentsList } from '@/components/student-list'
import StudentsPage from '@/components/students/students-page'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from '@/components/ui/resizable'

export function HomePage() {
    return (
        <ResizablePanelGroup className="w-full" direction="horizontal">
            <ResizablePanel defaultSize={65} maxSize={80} minSize={45}>
                <div>
                    <StudentsPage />
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={35}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={50}>
                        <ClassThemes />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                        <StudentsList />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

// Necessary for react router to lazy load.
export const Component = HomePage
