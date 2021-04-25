import { Component, OnInit, Input } from '@angular/core';
// import { Chart } from 'chart.js';
import {ChartDataAndAttributes } from '../models/daytasks'

@Component({
  selector: 'app-displaychart',
  templateUrl: './displaychart.component.html',
  styleUrls: ['./displaychart.component.css']
})
export class DisplaychartComponent implements OnInit {
  @Input() chart_data_and_attributes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
