import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee';
@Component({
  selector: 'employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  
  employee: Employee = {
    email: '',
    lastName: '',
    firstName: '',
    id:0,
    phone:'',
    position:'',
  };

  OnSubmit(): void {
    console.log(`On submit: ${this.employee}`);
  }

}
