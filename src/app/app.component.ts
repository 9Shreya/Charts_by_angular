import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title;
  public legendSettings;
  public marker;
  public tooltip;
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public chartData: Object[];
  ngOnInit(): void {
    this.title = 'Sales Analysis';
    // Data for chart series
    this.chartData = [
      { month: 'Jan', sales: 35 },
      { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 },
      { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 },
      { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 },
      { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 },
      { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 },
      { month: 'Dec', sales: 32 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
    };
    this.primaryYAxis = {
      labelFormat: '${value}K',
    };
    this.legendSettings = {
      visible: true,
    };
    this.marker = {
      dataLabel: {
        visible: true,
      },
    };
    // Tooltip for chart
    this.tooltip = {
      enable: true,
    };
  }
}
