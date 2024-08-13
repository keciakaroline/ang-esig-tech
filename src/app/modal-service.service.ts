import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  private modalVisibility = new BehaviorSubject<boolean>(false);

  get isVisible$() {
    return this.modalVisibility.asObservable();
  }

  toggleModal() {
    this.modalVisibility.next(!this.modalVisibility.value);
  }

  closeModal() {
    this.modalVisibility.next(false);
  }
}
