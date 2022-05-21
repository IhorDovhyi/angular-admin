import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartType} from "chart.js";
import {viewsDataMock} from "../../../../../../testing/viewsDataMock";
import {UsersService} from "../../../../shared/services/users.service";
import {IUser} from "../../../../shared/interfaces/user.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  currentUser: IUser = {} as IUser;

  disableRecolor!: boolean;

  showMessage = false;

  public lineChartData: any = {
    datasets: [
      {
        data: viewsDataMock,
        label: 'Views per year',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
    plugins: {
      legend: {display: true},
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.currentUser
      .subscribe((user: IUser) => {
        if (user?.name) {
          this.showMessage = true;
          this.currentUser = user;

          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        }
      });
  }

  randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] = DashboardComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  changeColor(): void {
    this.lineChartData.datasets[0].borderColor = 'green';
    this.lineChartData.datasets[0].backgroundColor = `rgba(0, 255, 0, 0.3)`;
    this.disableRecolor = true;

    this.chart?.update();
  }

  private updateCurrentDate(callback: any): void {
    const date = new Date();
    callback(date);
  }

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }
}
