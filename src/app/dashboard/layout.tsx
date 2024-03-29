import type { ReactNode } from 'react'

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return <section className="pt-20 h-screen">{children}</section>
}