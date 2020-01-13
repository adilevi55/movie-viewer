import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../movie-trailer-btn/movie-trailer-btn.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'movie-trailer-dialog-component.html',
})
export class MovieTrailerDialogComponent implements OnInit {

    trailerUrl: SafeResourceUrl;

    constructor(
        private sanitizer: DomSanitizer,
        public dialogRef: MatDialogRef<MovieTrailerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    ngOnInit(): void {
        this.trailerUrl = this.sanitizer
        .bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.data.trailerUrl)
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}