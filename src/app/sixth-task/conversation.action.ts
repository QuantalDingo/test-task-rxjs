import { createAction, props } from '@ngrx/store';

import Conversation from './conversation.model';

export const GetConversations = createAction('[Conversation] - Get All Conversations');

export const AddConversation = createAction('[Conversation] - Add Conversation', props<{ item: Conversation }>());

export const DeleteConversation = createAction('[Conversation] - Delete Conversation', props<{ id: number }>());
