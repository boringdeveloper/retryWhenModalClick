import { Component, OnInit } from '@angular/core';
import { ModalService } from '@core/services';
import { ModalConfig } from '@shared/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  config!: ModalConfig;

  constructor(
    private modalSvc: ModalService
  ) { }

  ngOnInit(): void {
    this.config = this.modalSvc.modalConfig;
  }

  retry() {
    this.modalSvc.show = false;

    if (this.config.callback) {
      this.config.callback();
    }
  }
}
