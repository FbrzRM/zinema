import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforegisttroComponent } from './inforegisttro.component';

describe('InforegisttroComponent', () => {
  let component: InforegisttroComponent;
  let fixture: ComponentFixture<InforegisttroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforegisttroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforegisttroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
