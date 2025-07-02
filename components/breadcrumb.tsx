'use client'
import { data } from "@/data";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AppBreadcrumb() {
    const pathname = usePathname()?.toString()
    const parentPath = pathname === "/" ? "/" : pathname.split('/').slice(0, -1).join('/')
    let currentItem: any;
    data.navMain.map((parent) => parent.items.map((item) => { if (item.url === pathname) currentItem = item }))
    const parentItem = data.navMain.find((item) => item.dataName === parentPath)

    return (

        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={parentPath}>
                        {parentItem?.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentItem?.title} </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}