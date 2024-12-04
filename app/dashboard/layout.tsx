import SideNav from "@/app/ui/dashboard/sidenav"

//export const experimental_ppr = true (The experimental feature "experimental.ppr" can only be enabled when using the latest canary version of Next.js.)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  )
}
