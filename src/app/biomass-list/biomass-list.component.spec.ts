import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomassListComponent } from './biomass-list.component';

describe('BiomassListComponent', () => {
  let component: BiomassListComponent;
  let fixture: ComponentFixture<BiomassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiomassListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
