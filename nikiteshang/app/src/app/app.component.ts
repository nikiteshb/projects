import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Nikitesh Bhadade Web Designer';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'nikitesh,bhadade,jain kalar,web designer,front end developer,ui developer,ui designer,pune ui designer,ui ux,nikitesh bhadade'},
      {name: 'description', content: 'I live in a Big town somewhere in the world. I am passionated about Minimalistic and Flat Design. I like to resolve design problems, create smart user interface and imagine useful interaction.'},
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Nikitesh Bhadade' },
      {charset: 'UTF-8' },
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
      {name: 'og:type', content: 'website'},
      {name: 'og:title', content: 'Nikitesh Bhadade - Web Designer - UI/UX Developer'},
      {name: 'og:description', content: 'HELLO,I live in a Big town somewhere in the world. I am passionated about Minimalistic and Flat Design. I like to solve design problems, create smart user interface and imagine useful interactions.'},
      {name: 'og:url', content: 'http://nikitesh.com/'},
      {name: 'og:site_name', content: 'Nikitesh Bhadade'},
      {name: 'og:image', content: 'http://nikitesh.com/assets/images/nikitesh.png'},
      {name: 'og:image:width', content: '660'},
      {name: 'og:image:height', content: '660'}
    ]);
  
  }
}
