import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions';

interface State {
  incomes: {};
  expenses: {};
  income_categories: {};
  expense_categories: {};
}

const initialState = {navbarOpen: false, dateRange: {startDate: 0, endDate: Infinity}};

export const transactionReducer = createReducer(
  initialState,
  on(actions.allExpenses, (state, action) => ({...state, expenses: {...action.expenses}})),
  on(actions.allIncomes, (state, action) => ({...state, incomes: {...action.incomes}})),
  on(actions.userInfo, (state, action) => ({...state, user_info: action.user_info})),
  on(actions.incomeCategories, (state, action) => ({...state, income_categories: action.income_categories})),
  on(actions.expenseCategories, (state, action) => ({...state, expense_categories: action.expense_categories})),
  on(actions.dateRange, (state, action) => ({...state, dateRange: {startDate: action.startDate, endDate: action.endDate}})),
  on(actions.clearDateRange, (state, action) => ({...state, dateRange: {startDate: action.startDate, endDate: action.endDate}})),
  on(actions.toggleNavbar, (state, action) => ({...state, navbarOpen: !state.navbarOpen})),
  on(actions.loggedIn, (state, action) => ({...state, loggedIn: action.loggedIn}))
);
