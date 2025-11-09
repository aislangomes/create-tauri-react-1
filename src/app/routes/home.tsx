import { ClassThemes } from '@/components/class-themes'
import { Header } from '@/components/header'
import { StudentForm } from '@/components/register/students-register'
import StudentsPage from '@/components/students/students-page'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from '@/components/ui/resizable'

export function HomePage() {
    return (
        <>
            <Header />
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full"
            >
                <ResizablePanel defaultSize={65}>
                    <div className="p-5">
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
                            <StudentForm />
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}

// Necessary for react router to lazy load.
export const Component = HomePage
