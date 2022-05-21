import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {IUser} from "../../../../shared/interfaces/user.interface";
import {ITransaction} from "../../../../shared/interfaces/transaction.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe],
})
export class DashboardComponent implements OnInit {

  currentDate!: string;
  date = new Date();
  currentUser: IUser = {} as IUser;
  transactions: ITransaction[] = [];

  fruits: string[] = [
    'Apple',
    'Banana',
    'Peach',
    'Plum',
    'Orange'
  ];

  fruitsFirstCopy: string[] = [];
  fruitsSecondCopy: string[] = [];
  withNumber1: string[] = [];
  afterReplace: string[] = [];

  includesSymbolA: boolean[] = [];
  isEveryLengthMoreFive!: boolean;
  isAnyString!: boolean;

  constructor(
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
    this.DateNow(this.getTodayDate);
    this.updateUser();

    this.fruitsFirstCopy = this.fruits;
    this.fruitsSecondCopy = [...this.fruits];

    this.fruits[0] = 'Pear';

    this.includesSymbolA = this.fruits.map(el => el.includes('a'));
    this.isEveryLengthMoreFive = this.fruits.every(el => el.length > 5);
    this.isAnyString = this.fruits.some(el => typeof el === 'string');
    this.withNumber1 = this.fruits.map(el => el + ' 1');
    this.afterReplace = this.fruits.map(el => el.replace(' 1', ''));
  }

  private getTodayDate = (): void => {
    this.currentDate = `Today: ${this.datePipe.transform(this.date, 'MM.dd.yyyy hh:mm a')}`;
  }

  private DateNow(callback: any): void {
    const date = new Date();
    callback(date);
  }

  private updateUser(date: Date = new Date(), active = false): void {
    this.currentUser = {
      id: -1,
      name: 'New user',
      updatedAt: date.toISOString(),
      transactions: [...this.transactions],
      active,
    }
  }
}
