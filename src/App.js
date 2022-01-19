import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID="07d5e49a-a656-4411-a5fa-2f1765f20c3a"
            userName="Aryan"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App