// // 'use client'

// // import * as React from 'react'

// // import { useSidebar } from '@/lib/hooks/use-sidebar'
// // import { cn } from '@/lib/utils'

// // export interface SidebarProps extends React.ComponentProps<'div'> {}

// // export function Sidebar({ className, children }: SidebarProps) {
// //   const { isSidebarOpen, isLoading } = useSidebar()

// //   return (
// //     <div
// //       data-state={isSidebarOpen && !isLoading ? 'open' : 'closed'}
// //       className={cn(className, 'h-full flex-col dark:bg-zinc-950')}
// //     >
// //       {children}
// //     </div>
// //   )
// // }

// // components/sidebar.tsx
// "use client"

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button"
// import { Home, Settings } from "lucide-react"
// import Link from "next/link"

// export function Sidebar() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline" className="">
//           ☰
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="w-[250px] bg-white p-4 md:flex md:flex-col">
//         <nav className="flex flex-col gap-4">
//           <Link href="/" className="flex items-center gap-2">
//             <Home className="w-4 h-4" /> Home
//           </Link>
//           <Link href="/settings" className="flex items-center gap-2">
//             <Settings className="w-4 h-4" /> Settings
//           </Link>
//         </nav>
//       </SheetContent>
//     </Sheet>
//   )
// }

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Home, Inbox, Calendar, Search, Settings, FileText, FileQuestionMark, BotMessageSquare } from "lucide-react"

const items = [
  {
    title: "Ask to AI",
    url: "/",
    icon: BotMessageSquare,
  },
  {
    title: "Guides",
    url: "/guides/1_getting_started/intro",
    icon: FileText,
  },
  {
    title: "FAQ",
    url: "/faq",
    icon: FileQuestionMark,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Admin",
    url: "#",
    icon: Settings,
  },
]
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="bg-white px-4"> 
        <SidebarGroup />
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}