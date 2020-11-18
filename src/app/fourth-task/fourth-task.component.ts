import { Component, OnInit } from '@angular/core';

type Message = string;

@Component({
  selector: 'app-fourth-task',
  templateUrl: './fourth-task.component.html',
  styleUrls: ['./fourth-task.component.scss']
})
export class FourthTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*
#4: Writing a code that get value from one input on change and use
that value for a function called searchMessages(keyword: string): Observable<Message[]>
When we receive data from that function. Please display the messages list in the UI using change detection
*/
