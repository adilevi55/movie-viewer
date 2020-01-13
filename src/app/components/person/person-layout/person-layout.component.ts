import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpPersonService } from 'src/app/services/http-request/http-person.service';

@Component({
  selector: 'mv-person-layout',
  templateUrl: './person-layout.component.html',
})
export class PersonLayoutComponent implements OnInit {

  personId: number;
  person;
  movies;
  
  constructor(private route: ActivatedRoute, private http: HttpPersonService) {}
  
  ngOnInit() {
      this.route.params
      .subscribe((params: Params) => {
          this.personId = params["id"];

          this.http.getPerson(this.personId)
          .subscribe(person => {
              this.person = person;
          });
          this.http.getPersonMoviesCast(this.personId)
              .subscribe(response => {
                  this.movies = response.cast;
              })
      });
  };
}
