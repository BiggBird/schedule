export class BookedTask {
    start: number;
    duration: number;
    name: string;
    type?: string;

    constructor(start:number, duration:number, name:string, type:string) {
        this.start = start;
        this.duration = duration;
        this.name = name;
        this.type = type;
    }

}


export class ChartDataAndAttributes {
    public barChartOptions: any;
    public barChartLabels: any;
    public barChartType: any;
    public barChartLegend: any;
    public barChartData: any;
    public barChartColors: any;
  
    constructor() { }
  }
  