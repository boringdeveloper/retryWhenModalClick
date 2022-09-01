import { Injectable } from '@angular/core';
import { ModalConfig } from '@shared/interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  show: boolean = false;
  modalConfig!: ModalConfig;

  constructor() { }

  open(config: ModalConfig) {
    this.show = true;
    this.modalConfig = config;
  }
}
