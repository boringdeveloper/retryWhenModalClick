import { Component, OnInit } from '@angular/core';
import { ApiService, ModalService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = 'ng-app';

  constructor(
    private apiSvc: ApiService,
    public modalSvc: ModalService,
    ) {}

  getHelloWorld(): void {
    this.apiSvc.getHelloWorld().subscribe((res) => {
      this.message = res.message;
    });
  }
}
