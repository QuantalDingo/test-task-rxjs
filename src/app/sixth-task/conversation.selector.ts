import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IConversationState } from './conversation.state';

export const conversations = createFeatureSelector<IConversationState>('conversations');

export const getConversations = () => createSelector(
    conversations, (state) => state
);

export const getConversationById = (id: number) => createSelector(
    conversations, (state) => state.conversations.filter(item => item.id === id)
);
