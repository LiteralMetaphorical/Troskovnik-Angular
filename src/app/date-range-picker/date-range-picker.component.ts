import { Component } from '@angular/core';
import { dateRange } from '../store/actions';
import { Store } from '@ngrx/store';

interface AppState {
  appState: {
    dateRange: object;
    incomes: object;
    expenses: object;
    income_categories: object;
    expense_categories: object;
  };
}

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {

  constructor(private store: Store<AppState>) { }

  startDate: number;
  endDate: number;

  setDateRange($event) {
    const startDate = $event.target.value.begin._d.getTime();
    const endDate = $event.target.value.end._d.getTime();
    this.store.dispatch(dateRange({startDate, endDate}));
  }
}
