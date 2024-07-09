import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUiLibComponent } from './grid-ui-lib.component';

describe('GridUiLibComponent', () => {
  let component: GridUiLibComponent;
  let fixture: ComponentFixture<GridUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridUiLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
