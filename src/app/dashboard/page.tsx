import { AppSidebar } from "@/components/Dashboard/app-sidebar"
import AudioRoomsCarousel from "@/components/Dashboard/AudioRoomsCarousel"
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

export default function Page() {
  return (
    <div className="min-h-screen bg-black dark">
      <SidebarProvider>
        <AppSidebar />
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
                    <BreadcrumbPage className="text-green-400">Live Rooms</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-6 p-6 pt-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">Live Audio Rooms</h1>
              <p className="text-gray-400">Discover and join conversations happening right now</p>
            </div>
            <AudioRoomsCarousel />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
