import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Item } from './model/item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'DragAndDropTest';
    items1: Item[] = [];
    items2: Item[] = [];

    ngOnInit() {
        this.items1 = [...Array(2).keys()].map(x => new Item("Item-app1-" + x, "app1"));
        this.items2 = [...Array(3).keys()].map(x => new Item("Item-app2-" + x, "app2"));
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
