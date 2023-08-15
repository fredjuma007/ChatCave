import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
/* Explaination of the imports respectively;
 1.user connect to all there chats
 2.the UI for the user to type etc
 3.makes the chatapp work
*/
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '654c744a-3608-4ebc-945e-fbe483965a09',
         props.user.username, 
         props.user.secret
    );
    return(
         <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> 
        </div>
    )
}

export default ChatsPage;
