import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';

const routes: Routes = [
  { path: '', redirectTo: 'cafe', pathMatch: 'full' },
  { path: 'cafe', component: CafeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
