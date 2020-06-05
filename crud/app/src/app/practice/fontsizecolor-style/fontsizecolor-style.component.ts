import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontsizecolor-style',
  templateUrl: './fontsizecolor-style.component.html',
  styleUrls: ['./fontsizecolor-style.component.scss']
})
export class FontsizecolorStyleComponent implements OnInit {
  name:string = "nikitesh bhadade";
  pragraph:string = "Create a page with static content including features like titles, paragraphs, body, hyperlinks etc. Use AngularJS to:"
  link:string = "www.nikitesh.com";
  changingText:string = "";
  textCol:string = "";
  fontStyle:string = "";

  textSize = 12;

  constructor() { }

  setText(event)  {
    let textVal = event.target.value;
    this.changingText = textVal;
  }
  setSize(operation){
    if(operation === 'inc'){
      this.textSize += 1;
    }
    else{
      this.textSize -= 1;
    }
  }
  
  setColor(event){
      let colorVal = event.target.value;
      this.textCol = colorVal;      
  }

  setFontStyle(event){
    let fontVal = event.target.value;
    this.fontStyle = fontVal;
  }

  ngOnInit(): void {
  }

}
