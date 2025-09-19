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
import { useWallet } from "@solana/wallet-adapter-react"

type DashboardSection = 
  | 'home' 
  | 'trending-rooms' 
  | 'hosted-rooms' 
  | 'joined-rooms' 
  | 'scheduled-rooms' 
  | 'live-events' 
  | 'favorites' 
  | 'discover' 
  | 'settings'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activeSection?: DashboardSection
  setActiveSection?: (section: DashboardSection) => void
}

// This is sample data.
const createNavData = (activeSection: DashboardSection, setActiveSection: (section: DashboardSection) => void) => ({
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
      section: "home" as DashboardSection,
      icon: Home,
      isActive: activeSection === "home",
      onClick: () => setActiveSection("home"),
      items: [
        {
          title: "Dashboard",
          section: "home" as DashboardSection,
          onClick: () => setActiveSection("home"),
        },
      ],
    },
    {
      title: "Trending Rooms",
      section: "trending-rooms" as DashboardSection,
      icon: TrendingUp,
      isActive: activeSection === "trending-rooms",
      onClick: () => setActiveSection("trending-rooms"),
      items: [
        {
          title: "Most Popular",
          section: "trending-rooms" as DashboardSection,
          onClick: () => setActiveSection("trending-rooms"),
        },
      ],
    },
    {
      title: "My Rooms",
      section: "hosted-rooms" as DashboardSection,
      icon: Mic,
      isActive: ["hosted-rooms", "joined-rooms", "scheduled-rooms"].includes(activeSection),
      onClick: () => setActiveSection("hosted-rooms"),
      items: [
        {
          title: "Hosted Rooms",
          section: "hosted-rooms" as DashboardSection,
          onClick: () => setActiveSection("hosted-rooms"),
        },
        {
          title: "Joined Rooms",
          section: "joined-rooms" as DashboardSection,
          onClick: () => setActiveSection("joined-rooms"),
        },
        {
          title: "Scheduled",
          section: "scheduled-rooms" as DashboardSection,
          onClick: () => setActiveSection("scheduled-rooms"),
        },
      ],
    },
    {
      title: "Settings",
      section: "settings" as DashboardSection,
      icon: Settings2,
      isActive: activeSection === "settings",
      onClick: () => setActiveSection("settings"),
      items: [
        {
          title: "Audio Preferences",
          section: "settings" as DashboardSection,
          onClick: () => setActiveSection("settings"),
        },
      ],
    },
  ],
  projects: [
    {
      name: "Live Events",
      section: "live-events" as DashboardSection,
      icon: Calendar,
      onClick: () => setActiveSection("live-events"),
    },
    {
      name: "Favorites",
      section: "favorites" as DashboardSection,
      icon: Heart,
      onClick: () => setActiveSection("favorites"),
    },
    {
      name: "Discover",
      section: "discover" as DashboardSection,
      icon: Star,
      onClick: () => setActiveSection("discover"),
    },
  ],
})

export function AppSidebar({ activeSection = "home", setActiveSection = () => {}, ...props }: AppSidebarProps) {
  const {wallet}=useWallet()
  const publickey=wallet?.adapter.publicKey?.toString()
  console.log(wallet?.adapter.publicKey?.toBase58())
  
  const data = createNavData(activeSection, setActiveSection)
  
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
        {publickey && <NavUser user={publickey} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
