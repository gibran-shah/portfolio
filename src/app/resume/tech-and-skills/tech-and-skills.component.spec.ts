import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAndSkillsComponent } from './tech-and-skills.component';

describe('TechAndSkillsComponent', () => {
  let component: TechAndSkillsComponent;
  let fixture: ComponentFixture<TechAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechAndSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
