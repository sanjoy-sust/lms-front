import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelfComponent } from './book-self.component';

describe('BookSelfComponent', () => {
  let component: BookSelfComponent;
  let fixture: ComponentFixture<BookSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
