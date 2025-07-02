'use client'
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { usePathname } from "next/navigation"
import { data } from "@/data"
import { ChevronRight } from "lucide-react"




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="pb-12 gap-0">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen={item.items.some((item) => item.url === pathname)}
            className="group/collapsible first:mb-4 first:border-b first:border-b-gray-300"
          >
          <SidebarGroup key={item.title} className="mb-0 ">
              <SidebarGroupLabel className="font-semibold text-black text-[1rem]">
                 <CollapsibleTrigger className="w-full flex items-center justify-between">
                  {item.title}{" "}
                  <ChevronRight className="w-4 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" data-state="closed" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-0">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton asChild isActive={item && item.url === window.location.pathname}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
