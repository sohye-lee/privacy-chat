import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '../actions'

export const metadata = {
  title: 'Privacy Policy AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  const initialAIState = {
    chatId: id,
    messages: []
  }

  return (
    <AI initialAIState={initialAIState}>
      <Chat id={id} session={session} missingKeys={missingKeys}   />
    </AI>
  )
}
