import { Injectable } from '@angular/core';
import { Employee } from '../models/employee/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _employees: Employee[] = [
    {
      id: '1',
      firstName: 'Alice',
      lastName: 'Smith',
      cin: 'AA123456',
      email: 'alice.smith@example.com',
      age: '25',
      salary: '3000',
    },
    {
      id: '2',
      firstName: 'Bob',
      lastName: 'Jones',
      cin: 'BB234567',
      email: 'bob.jones@example.com',
      age: '30',
      salary: '4000',
    },
    {
      id: '3',
      firstName: 'Charlie',
      lastName: 'Brown',
      cin: 'CC345678',
      email: 'charlie.brown@example.com',
      age: '35',
      salary: '5000',
    },
    {
      id: '4',
      firstName: 'David',
      lastName: 'Green',
      cin: 'DD456789',
      email: 'david.green@example.com',
      age: '40',
      salary: '6000',
    },
    {
      id: '5',
      firstName: 'Eve',
      lastName: 'White',
      cin: 'EE567890',
      email: 'eve.white@example.com',
      age: '45',
      salary: '7000',
    },
    {
      id: '6',
      firstName: 'Frank',
      lastName: 'Black',
      cin: 'FF678901',
      email: 'frank.black@example.com',
      age: '50',
      salary: '8000',
    },
    {
      id: '7',
      firstName: 'Grace',
      lastName: 'Lee',
      cin: 'GG789012',
      email: 'grace.lee@example.com',
      age: '55',
      salary: '9000',
    },
    {
      id: '8',
      firstName: 'Harry',
      lastName: 'Potter',
      cin: 'HH890123',
      email: 'harry.potter@example.com',
      age: '60',
      salary: '10000',
    },
    {
      id: '9',
      firstName: 'Iris',
      lastName: 'Wang',
      cin: 'II901234',
      email: 'iris.wang@example.com',
      age: '65',
      salary: '11000',
    },
    {
      id: '10',
      firstName: 'Jack',
      lastName: 'Chen',
      cin: 'JJ012345',
      email: 'jack.chen@example.com',
      age: '70',
      salary: '12000',
    },
  ];
  private _employee!: Employee;

  constructor() {}

  getEmployees(): Employee[] {
    return this._employees;
  }

  addEmployee(employee: Employee) {
    this._employees.push(employee);
  }

  get employee(): Employee {
    if (!this._employee) {
      this._employee = new Employee();
    }
    return this._employee;
  }

  set employee(employee: Employee) {
    this._employee = employee;
  }

  addEmployeeToEdit(employee: Employee) {
    this._employee = employee;
  }

  saveEmployee(employee: Employee) {
    this._employees.push(employee);
  }
}
