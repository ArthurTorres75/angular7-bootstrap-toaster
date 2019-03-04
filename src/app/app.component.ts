import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Base2';
  constructor(private toastr: ToastrService) {
  }
  showSuccess() {
    console.log('toaster');
    this.toastr.success('Mundo cruel', 'Hola');
  }
}
