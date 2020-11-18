import { Message } from './message.model';

export default interface IConversation {
    id: number;
    messages: Message[];
}
