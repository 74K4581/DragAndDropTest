import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Item } from '../model/item';

@Component({
  selector: 'app-item-list2',
  templateUrl: './item-list2.component.html',
  styleUrls: ['./item-list2.component.scss']
})
export class ItemList2Component implements OnInit {

    items: Item[] = [];

    constructor() { }

    ngOnInit(): void {
        this.items = [...Array(2).keys()].map(x => new Item("Item-list2-" + x, "list2"));
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
