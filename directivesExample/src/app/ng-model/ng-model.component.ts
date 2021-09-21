import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  constructor() { 
    
  }
  abc = null;
  flag = null;
  ngOnInit(): void {
  }
  callme(){
    console.log(this.abc);
    console.log("hello")
  }

}
