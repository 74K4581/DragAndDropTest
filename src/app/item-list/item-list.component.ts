import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Item } from '../model/item';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

    items: Item[] = [];

    constructor() { }

    ngOnInit(): void {
        this.items = [...Array(2).keys()].map(x => new Item("Item-list1-" + x, "list1"));
    }

    drop(e: CdkDragDrop<string[]>) {

        if (e.previousContainer === e.container) {
            moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);

        } else {
            transferArrayItem(e.previousContainer.data,
                e.container.data,
                e.previousIndex,
                e.currentIndex);

        }
    }
}
