import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailvalidation',
  templateUrl: './emailvalidation.component.html',
  styleUrls: ['./emailvalidation.component.css']
})
export class EmailvalidationComponent implements OnInit {
  validemail = true;
  binding =null;
  constructor() { }

  ngOnInit(): void {
  }

}
