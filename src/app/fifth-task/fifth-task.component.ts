import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-fifth-task',
  templateUrl: './fifth-task.component.html',
  styleUrls: ['./fifth-task.component.scss']
})
export class FifthTaskComponent implements OnInit {

  private readonly DARK_CLASS_NAME = 'dark';
  private readonly LIGHT_CLASS_NAME = 'light';

  @HostBinding('class') private _className = 'light';

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }

  public toggleControl: FormControl = null;

  constructor() {
    this.toggleControl = new FormControl(false);
  }

  ngOnInit(): void {
    const switcher$ = this.toggleControl.valueChanges
      .pipe(
        tap<boolean>(val => this.className = val ? this.DARK_CLASS_NAME : this.LIGHT_CLASS_NAME)
      );
    switcher$.subscribe();
  }

}
