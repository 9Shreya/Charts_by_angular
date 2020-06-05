import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ChartModule,
  LineSeriesService,
  CategoryService,
  LegendService,
  TooltipService,
  DataLabelService,
} from '@syncfusion/ej2-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChartModule],
  providers: [
    LineSeriesService,
    CategoryService,
    LegendService,
    TooltipService,
    DataLabelService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
