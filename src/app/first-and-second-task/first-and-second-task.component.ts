import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, Observable, of } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-first-and-second-task',
  templateUrl: './first-and-second-task.component.html',
  styleUrls: ['./first-and-second-task.component.scss']
})
export class FirstAndSecondTaskComponent implements OnInit {
  private fakeRequest$: Observable<string> = null;
  private isUserLoggedIn$: BehaviorSubject<boolean> = null;

  set isUserLoggedIn(value: boolean) {
    this.isUserLoggedIn$.next(value);
  }

  get isUserLoggedIn(): boolean {
    return this.isUserLoggedIn$.getValue();
  }

  public loggedStatuses = [{ value: true, name: 'Logged In' },
  { value: false, name: 'Logged Out' }] as const;

  constructor() {
    this.fakeRequest$ = of('[FAKE REQUEST]').pipe(delay(500));
    this.isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
    combineLatest([
      this.fakeRequest$,
      this.getOnlineStatus(1000),
      this.isUserLoggedIn$,
    ])
      .pipe(
        filter(([_, online, loggedIn]) => online && loggedIn),
      )
      .subscribe(_ => console.log('User is online and logged in.'));
  }

  private getOnlineStatus(del: number): Observable<boolean> {
    return interval(del).pipe(map(val => !!(val % 6))); // Offline when number % 6 === 0
  }
}
