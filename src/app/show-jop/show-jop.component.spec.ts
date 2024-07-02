import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJopComponent } from './show-jop.component';

describe('ShowJopComponent', () => {
  let component: ShowJopComponent;
  let fixture: ComponentFixture<ShowJopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowJopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowJopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
