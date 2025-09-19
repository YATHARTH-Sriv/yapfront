"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/Dashboard/app-sidebar"
import HomeDashboard from "@/components/Dashboard/HomeDashboard"
import ScheduledRooms from "@/components/Dashboard/ScheduledRooms"
import HostedRooms from "@/components/Dashboard/HostedRooms"
import JoinedRooms from "@/components/Dashboard/JoinedRooms"
import Settings from "@/components/Dashboard/Settings"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export type DashboardSection = 
  | 'home' 
  | 'trending-rooms' 
  | 'hosted-rooms' 
  | 'joined-rooms' 
  | 'scheduled-rooms' 
  | 'live-events' 
  | 'favorites' 
  | 'discover' 
  | 'settings'

const getSectionTitle = (section: DashboardSection) => {
  const titles = {
    'home': 'Live Rooms',
    'trending-rooms': 'Trending Rooms',
    'hosted-rooms': 'My Hosted Rooms',
    'joined-rooms': 'Joined Rooms',
    'scheduled-rooms': 'Scheduled Rooms',
    'live-events': 'Live Events',
    'favorites': 'Favorites',
    'discover': 'Discover',
    'settings': 'Settings'
  }
  return titles[section] || 'Dashboard'
}

const renderContent = (activeSection: DashboardSection) => {
  switch (activeSection) {
    case 'home':
      return <HomeDashboard />
    case 'scheduled-rooms':
      return <ScheduledRooms />
    case 'hosted-rooms':
      return <HostedRooms />
    case 'joined-rooms':
      return <JoinedRooms />
    case 'settings':
      return <Settings />
    case 'trending-rooms':
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Trending Rooms</h1>
            <p className="text-gray-400">Most popular rooms right now</p>
          </div>
          <div className="text-gray-400 text-center py-20">
            Trending rooms content coming soon...
          </div>
        </div>
      )
    case 'live-events':
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Live Events</h1>
            <p className="text-gray-400">Special events happening now</p>
          </div>
          <div className="text-gray-400 text-center py-20">
            Live events content coming soon...
          </div>
        </div>
      )
    case 'favorites':
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Favorites</h1>
            <p className="text-gray-400">Your saved rooms and content</p>
          </div>
          <div className="text-gray-400 text-center py-20">
            Favorites content coming soon...
          </div>
        </div>
      )
    case 'discover':
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Discover</h1>
            <p className="text-gray-400">Find new rooms and creators</p>
          </div>
          <div className="text-gray-400 text-center py-20">
            Discover content coming soon...
          </div>
        </div>
      )
    default:
      return <HomeDashboard />
  }
}

export default function Page() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('home')

  return (
    <div className="min-h-screen bg-black dark">
      <SidebarProvider>
        <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <SidebarInset className="bg-black">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-black/80 backdrop-blur-md border-b border-green-500/20">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 text-green-400 hover:text-green-300" />
              <Separator orientation="vertical" className="mr-2 h-4 bg-green-500/30" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                      YapHouse
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block text-green-500/50" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-green-400">{getSectionTitle(activeSection)}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 pt-4">
            {renderContent(activeSection)}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
