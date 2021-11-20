import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: ToastService) {}

  showError(message: String): void {
    this.toast.showError(message);
  }

  showSuccess(message: String): void {
    this.toast.showSuccess(message);
  }

  showInfo(message: String): void {
    this.toast.showInfo(message);
  }

  showWarning(message: String): void {
    this.toast.showWarning(message);
  }
}
