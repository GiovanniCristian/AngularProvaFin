import { IApi } from './../../shared/models/api.module';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  activity: IApi | undefined;
  request: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  findActivity(): void {
    this.request = this.apiService
      .getActivity()
      .subscribe((res: IApi) => (this.activity = res));
    console.log(this.request);
  }

  ngOnDestroy(): void {
    if (this.request) {
      this.request.unsubscribe();
    }
  }
}
