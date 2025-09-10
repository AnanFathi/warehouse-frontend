import { Fragment } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarHeader
} from "@/components/ui/sidebar";
import {
  ClipboardTextIcon,
  CopyIcon,
  FolderUserIcon,
  SquaresFourIcon,
  UserIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: SquaresFourIcon,
  },
  {
    title: "Forms",
    url: "#",
    icon: ClipboardTextIcon,
  },
  {
    title: "Assessment Group",
    url: "#",
    icon: FolderUserIcon,
  },
  {
    title: "Admins",
    url: "#",
    icon: UsersThreeIcon,
  },
  {
    title: "Candidates",
    url: "#",
    icon: UserIcon,
  },
];

export function AdminSidebar() {
  return (
    <Sidebar collapsible="icon" className="[--sidebar-width:18rem]s [--sidebar-width-icon:6rem]s">
      <SidebarHeader>
        <Image alt="" src="/images/logo.png" width={40} height={40}/>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <Fragment key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="py-6 bg-red-200">
                      <a href={item.url}>
                        <item.icon className="!w-8 !h-8 fill-primary"/>
                        <span className="text-xl text-primary">{item.title}</span>
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
