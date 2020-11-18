import IConversation from './conversation.model';

export interface IConversationState {
    readonly conversations: IConversation[];
}

export const initializeState = (): IConversationState => {
    return { conversations: new Array<IConversation>() };
};
