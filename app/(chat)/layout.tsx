import { auth } from '@/auth'
import { SidebarDesktop } from '@/components/sidebar-desktop'
// import { Sidebar } from '@/components/sidebar'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  // const sideBar = await Sidebar()
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      {/* <Sidebar /> */}
      {children}
    </div>
  )
}
