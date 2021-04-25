import { Component, OnInit, Input} from '@angular/core';
import {ChartDataAndAttributes } from '../models/daytasks'

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  @Input() weekly_booked_tasks: any;

  public chart_info: ChartDataAndAttributes = new ChartDataAndAttributes(); 

  constructor() { }

  ngOnInit(): void {
    let task_type_labels = ["Sleep", "Play", "Extracurricular", "Academics"];
    let task_duration_data = [0,0,0,0];

    for (let daily_booked_tasks of this.weekly_booked_tasks.entries()) {
      console.log(daily_booked_tasks[0], daily_booked_tasks[1]);  
      for (let booked_task of daily_booked_tasks[1].entries()) {
        console.log(booked_task[0], booked_task[1]);  
        for (let i = 0; i < 4; i++) {
          if (booked_task[1].type == task_type_labels[i]) {
            task_duration_data[i] += booked_task[1].duration;
            break;
          }
        }
      } 
    }

    this.chart_info.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.chart_info.barChartType = 'bar'; //'horizontalBar';
    this.chart_info.barChartLegend = true;
    this.chart_info.barChartData = [{ data: task_duration_data, label: "Total Activity Per Task Type"}];
    this.chart_info.barChartLabels = task_type_labels;
    this.chart_info.barChartColors = [
                                      {
                                        backgroundColor: 'rgba(103, 58, 183, .5)',
                                        borderColor: 'rgba(103, 58, 183)',
                                        pointBackgroundColor: 'rgb(103, 58, 183)',
                                        pointBorderColor: '#fff',
                                        pointHoverBackgroundColor: '#fff',
                                        pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
                                      }
                                    ];
  }

}
