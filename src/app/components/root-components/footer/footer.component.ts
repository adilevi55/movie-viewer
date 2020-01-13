import { Component } from '@angular/core';

@Component({
    selector:"mv-footer",
    template:`<h1><a href="http://levi-adi.com">ADI LEVI &copy;</a></h1>
               <p>This application uses the API from TMDB but is not certified or approved by them.</p> `,
    styles:[`
    h1{text-align:center;}
    a{text-decoration: none;color:#ffff}
    p{text-align:center}`
]   
})
export class FooterComponent{}
