import { Component } from '@angular/core';
import { TrainsService } from '../../../apiServices/trains.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent {

  trainList: any[] = [];
  constructor(private trainSrv: TrainsService) {
    this.getAllTrains();
  }
  getAllTrains() {
    this.trainSrv.getAllTrains().subscribe((res: any) => {
      this.trainList = res.data;
    });
  }

}
