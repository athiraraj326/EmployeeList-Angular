import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  employees = [
    {
      empName : "David",
      contact : "1234567",
      email : "david@gmail.com",
      address : "232 ABC Street"
    },
    {
      empName : "John",
      contact : "3816421",
      email : "john@gmail.com",
      address : "124 XYZ Street"
    }
  ]

  newEmployee = {
      empName : "",
      contact : "",
      email : "",
      address : ""
  }

  addEmployee() {
    this.employees.push({ ...this.newEmployee })
    this.newEmployee = { empName: '', contact: '', email: '', address: '' };    
  }

}
