import { Routes } from '@angular/router';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';


export const routes: Routes = [
  { path: '', redirectTo: 'create-account', pathMatch: 'full' },
  { path: 'create-account', component: AccountCreateComponent },
  { path: 'transfer', component: FundTransferComponent },
  { path: 'history', component: TransactionHistoryComponent }
];

