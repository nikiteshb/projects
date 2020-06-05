import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  mainTitle = "My New Photograph";

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("refrence-page");    
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("refrence-page");
  }

}
