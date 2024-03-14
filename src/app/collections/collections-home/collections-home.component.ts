import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 29, job: 'Engineer' },
    { name: 'Tanvi', age: 28, job: 'Doctor' },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
