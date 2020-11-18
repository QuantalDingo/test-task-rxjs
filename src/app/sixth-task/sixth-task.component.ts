import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IConversationState } from './conversation.state';
import { AddConversation, DeleteConversation } from './conversation.action';
import { getConversations, getConversationById } from './conversation.selector';

@Component({
  selector: 'app-sixth-task',
  templateUrl: './sixth-task.component.html',
  styleUrls: ['./sixth-task.component.scss']
})
export class SixthTaskComponent implements OnInit {

  constructor(private readonly store: Store<IConversationState>) {
    this.store.pipe(select(getConversations())).subscribe(console.log);
  }

  ngOnInit(): void {
    this.store.dispatch(AddConversation({ item: { id: 1, messages: ['Hello'] } }));
    this.store.dispatch(AddConversation({ item: { id: 2, messages: ['World', '!'] } }));
    this.store.dispatch(DeleteConversation({ id: 1 }));
  }

}
