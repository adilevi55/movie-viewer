import { Component, Input, OnChanges } from '@angular/core';
import { ReturnPageService } from 'src/app/services/pager/return-page.sevice';

@Component({
  selector: 'mv-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnChanges {

  @Input() currentPage;
  @Input() totalPages;
  @Input() ganreName;
  @Input() ganreId;
  @Input() categoryForHttpReq;
  @Input() search;

  pagesArray = Array
    .from(Array(10), (x, index) => index + 1);

  constructor(public returnPage: ReturnPageService) { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.totalPages !== undefined && changes.totalPages.currentValue < 10) {
      this.pagesArray = Array
        .from(Array(changes.totalPages.currentValue), (x, index) => index + 1);
    }
  }

  get10PreviousPages() {
    this.pagesArray = this.returnPage.loadPrevious10Pages
      .loadPrevious10PagesForListByGenderOrCategory(
        this.pagesArray,
        this.ganreName,
        this.ganreId,
        this.categoryForHttpReq,
        this.search
      )
  };
  get10NextPages() {
    this.pagesArray = this.returnPage.loadNext10Pages
      .loadNext10PageForListByGenderOrByCategory(
        this.pagesArray,
        this.ganreName,
        this.ganreId,
        this.categoryForHttpReq,
        this.search
      )
  };

}
