"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  ClipboardTextIcon,
  FolderUserIcon,
  SquaresFourIcon,
  UserIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: SquaresFourIcon,
  },
  {
    title: "Forms",
    url: "/forms",
    icon: ClipboardTextIcon,
  },
  {
    title: "Assessment Group",
    url: "/assessment-group",
    icon: FolderUserIcon,
  },
  {
    title: "Admins",
    url: "/admins",
    icon: UsersThreeIcon,
  },
  {
    title: "Candidates",
    url: "/candidates",
    icon: UserIcon,
  },
];

export function AdminSidebar() {
  const { i18n } = useTranslation();
  const pathname = usePathname().split("/")[1];

  return (
    <Sidebar
      side={i18n.dir() === "ltr" ? "left" : "right"}
      collapsible="icon"
    >
      <SidebarHeader className="items-center py-6">
        <Image alt="" src="/images/logo.png" width={50} height={50} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 group-data-[collapsible=icon]:gap-2">
              {items.map((item, index) => (
                <Fragment key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className={`py-6 group-data-[collapsible=icon]:p-2 hover:bg-white/10 ${
                        "/" + pathname === item.url && "bg-secondary/30"
                      }`}
                    >
                      <a href={item.url}>
                        <item.icon className="!w-8 !h-8 fill-white" />
                        <span className="text-xl text-white">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {index === 0 && <SidebarSeparator />}
                </Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
