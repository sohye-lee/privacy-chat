import { AppSidebar } from '@/components/sidebar'

import { auth } from '@/auth'
import { ChatHistory } from '@/components/chat-history'

export async function SidebarDesktop() {
  const session = await auth()

  if (!session?.user?.id) {
    return null
  }

  return (
    <AppSidebar>
      {/* @ts-ignore */}
      {/* <ChatHistory userId={session.user.id} /> */}
    </AppSidebar>
  )
}
