import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemList2Component } from './item-list2.component';

describe('ItemList2Component', () => {
  let component: ItemList2Component;
  let fixture: ComponentFixture<ItemList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
