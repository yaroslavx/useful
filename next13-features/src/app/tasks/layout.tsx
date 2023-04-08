import { ReactNode } from "react";
import TasksList from "./TasksList"

export default function RootLayout({
    children
}: { children: ReactNode }) {
    return (
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                <TasksList />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </main>)
}