import ChatPanel from '../../components/ChatPanel/ChatPanel';
import ChatArea from '../../components/ChatArea/ChatArea';

const ChatPage = () => {
  return (
    <div className='flex flex-row p-2 gap-2 bg-cyan-200 h-full'>
      <ChatPanel />
      <ChatArea />
    </div>
  )
}

export default ChatPage;