import { MaterialModule } from './common/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MetricesComponent } from './metrices/metrices.component';
import { TabsComponent } from './tabs/tabs.component';
import { SelectedMetricsComponent } from './selected-metrics/selected-metrics.component';
import { DropDownComponent } from './selected-metrics/drop-down/drop-down.component';
import { CardOptionsComponent } from './selected-metrics/card-options/card-options.component';
import { SelectedMetricsStore } from './common/selected-metrics.store';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricesComponent,
    TabsComponent,
    SelectedMetricsComponent,
    DropDownComponent,
    CardOptionsComponent,
    SideBarComponent,
    CategoriesListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'selected-metrics', component: SideBarComponent},
      {path: 'filter-conditions', component: SideBarComponent}
    ])
  ],
  providers: [
    SelectedMetricsStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
