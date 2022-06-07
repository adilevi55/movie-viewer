import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      { property: 'og:title', content: 'Movies Viewer' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://adilevi55.github.io/movie-viewer' },
      { property: 'og:image', content: 'https://i.ibb.co/JFbBxTy/0ecd0365-7fa0-4548-94f8-b2acbbe5c877.png' },
      { property: 'og:description', content: `description" content="The site was built by Adi Levy.
       The purpose of the site is to show my programming skills.
       The site shows information about movies` }
      
//       <!-- <meta name="description" content="The site was built by Adi Levy.
// The purpose of the site is to show my programming skills.
// The site shows information about movies" />

// <meta property="og:title" content="Movies Viewer" />
// <meta property="og:url" content="https://adilevi55.github.io/movie-viewer" />
// <meta property="og:image" content="https://i.ibb.co/JFbBxTy/0ecd0365-7fa0-4548-94f8-b2acbbe5c877.png" />
// <meta property="og:type" content="website" />

// <meta name="title" content="Movies Viewer" />
// <meta name="url" content="https://adilevi55.github.io/movie-viewer" />
// <meta name="image" content="https://i.ibb.co/JFbBxTy/0ecd0365-7fa0-4548-94f8-b2acbbe5c877.png" />
// <meta name="type" content="website" />
// -->


    ]);
    console.log(this.meta.getTags("property='og:description'")) 

  }
}
