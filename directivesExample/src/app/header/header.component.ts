import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  flag = false
  ngOnInit(): void {
  }
  display(){
    this.flag = !this.flag
  }

}
