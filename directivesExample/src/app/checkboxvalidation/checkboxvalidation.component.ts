import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxvalidation',
  templateUrl: './checkboxvalidation.component.html',
  styleUrls: ['./checkboxvalidation.component.css']
})
export class CheckboxvalidationComponent implements OnInit {
  flag = false
  constructor() { }
  display(){
    this.flag = !this.flag
  }
  ngOnInit(): void {
  }

}
