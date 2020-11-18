import { Action, createReducer, on } from '@ngrx/store';

import { IConversationState, initializeState } from './conversation.state';
import { AddConversation, DeleteConversation } from './conversation.action';

export const initialState = initializeState();

const _conversationReducer = createReducer(
    initialState,
    on(AddConversation, (state, { item }) => ({ ...state, conversations: [...state.conversations, item] })),
    on(DeleteConversation, (state, { id }) => ({
        ...state,
        conversations: [...state.conversations.filter((element) => element.id !== id)],
    })),
);

export function conversationReducer(state: IConversationState | undefined, action: Action): IConversationState {
    return _conversationReducer(state, action);
}
