import { Component, Input } from '@angular/core';

@Component({
    selector: 'mv-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent {
    @Input()person;
}