import { Component } from '@angular/core';
import { TrainsService } from '../../../apiServices/trains.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  trainList: any[] = [];
  loggedUserData: any;
  constructor(private trainSrv: TrainsService) {
    const localData = localStorage.getItem('trainUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.getAllTrains();
    }
  }
  getAllTrains() {
    this.trainSrv
      .getAllBookings(this.loggedUserData.passengerID)
      .subscribe((res: any) => {
        this.trainList = res.data;
      });
  }



}
