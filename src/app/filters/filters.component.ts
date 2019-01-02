import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
    filters: Array<object>;

    constructor() {
        this.filters = [];
        for(let i = 0; i < 50; i++) {
            this.filters.push({ name: i });
        }
    }

    ngOnInit() {

    }

    remove(event: MouseEvent, filter: object) {
        let el = <HTMLElement> event.currentTarget;
        // jquery slide up animation
        $(el.parentNode).slideUp('fast', () => {
            // remove filter from array
            this.filters.splice(this.filters.indexOf(filter), 1);
        });
    }

    drop(event: CdkDragDrop<object []>) {
        moveItemInArray(this.filters, event.previousIndex, event.currentIndex);
    }
}
