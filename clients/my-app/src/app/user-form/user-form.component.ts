import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  name: string | undefined;
  dob: Date | null = null;
  email: string | undefined;
  phone: string | undefined;
  constructor() { }
  onSubmit() {
    const data = {
      name: this.name,
      dob: this.dob,
      email: this.email,
      phone: this.phone
    };

    
  }

}
