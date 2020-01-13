import { Injectable } from '@angular/core';
import { LoadNext10PagesService } from './load-next-10-pages.service';
import { LoadNextPageService } from './load-next-page.service';
import { LoadPreviousPageService } from './load-previous-page.service';
import { LoadPrevious10PagesService } from './load-previous-10-pages.service';
import { LoadSpecificPagesService } from './load-specific-page.service';

@Injectable({
    providedIn: 'root'
})
export class ReturnPageService {

    constructor(
        public  loadNext10Pages: LoadNext10PagesService,
        public  loadNextPage: LoadNextPageService,
        public  loadPrevious10Pages: LoadPrevious10PagesService,
        public  loadPreviousPage: LoadPreviousPageService,
        public  loadSpecificPages: LoadSpecificPagesService,
    ) {}

}
