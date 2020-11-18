import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, timer } from 'rxjs';
import { buffer, map, multicast, refCount, skip, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.scss']
})
export class ThirdTaskComponent implements OnInit {

  private myNumber$: Observable<number> = null;
  private bufferBy$: Observable<number> = null;

  constructor() {
    this.myNumber$ = timer(0, 500).pipe(map(_ => this.randomInteger(0, 100)));
    this.bufferBy$ = interval(2000);
  }

  ngOnInit(): void {
    const random$ = this.getNumber().pipe(buffer(this.bufferBy$));
    random$.subscribe(console.log);
  }

  public getNumber(): Observable<number> {
    return this.myNumber$;
  }

  private randomInteger(min: number, max: number): number {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}
