import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStation, ResponseModel } from '../../../dataTypes/Station';
import { StationsService } from '../../../apiServices/stations.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  stationList: IStation[] = [];
  travelObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: '',
  };

  constructor(private stationSrv: StationsService, private router: Router) {}
  ngOnInit(): void {
    this.loadStations();
  }
  loadStations() {
    this.stationSrv.getAllStations().subscribe(
      (res: ResponseModel) => {
        this.stationList = res.data;
      },
      (error) => {
        alert('Error Occoured' + JSON.stringify(error));
      }
    );
  }

  onSearch() {
    this.router.navigate(['/search',
      this.travelObj.fromStationId,
      this.travelObj.toStationId,
      this.travelObj.dateOfTravel,
    ]);
  }

}
