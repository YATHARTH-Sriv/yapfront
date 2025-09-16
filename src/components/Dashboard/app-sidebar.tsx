"use client"

import * as React from "react"
import {
  AudioLines,
  Home,
  TrendingUp,
  Mic,
  Heart,
  Settings2,
  Radio,
  Calendar,
  Star,
} from "lucide-react"

import { NavMain } from "@/components/Dashboard/nav-main"
import { NavProjects } from "@/components/Dashboard/nav-projects"
import { NavUser } from "@/components/Dashboard/nav-user"
import { TeamSwitcher } from "@/components/Dashboard/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "AudioUser",
    email: "user@audioplatform.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "YapHouse",
      logo: AudioLines,
      plan: "Pro",
    },
    {
      name: "Community Hub",
      logo: Radio,
      plan: "Premium",
    },
    {
      name: "Creator Studio",
      logo: Mic,
      plan: "Creator",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Recent Rooms",
          url: "#",
        },
        {
          title: "Bookmarks",
          url: "#",
        },
      ],
    },
    {
      title: "Trending Rooms",
      url: "#",
      icon: TrendingUp,
      items: [
        {
          title: "Most Popular",
          url: "#",
        },
        {
          title: "Rising Fast",
          url: "#",
        },
        {
          title: "New & Hot",
          url: "#",
        },
      ],
    },
    {
      title: "My Rooms",
      url: "#",
      icon: Mic,
      items: [
        {
          title: "Hosted Rooms",
          url: "#",
        },
        {
          title: "Joined Rooms",
          url: "#",
        },
        {
          title: "Scheduled",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Audio Preferences",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Privacy",
          url: "#",
        },
        {
          title: "Account",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Live Events",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Favorites",
      url: "#",
      icon: Heart,
    },
    {
      name: "Discover",
      url: "#",
      icon: Star,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
