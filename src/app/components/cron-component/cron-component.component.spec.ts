import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronComponentComponent } from './cron-component.component';

describe('CronComponentComponent', () => {
  let component: CronComponentComponent;
  let fixture: ComponentFixture<CronComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
