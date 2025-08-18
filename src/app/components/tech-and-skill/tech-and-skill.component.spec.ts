import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAndSkillComponent } from './tech-and-skill.component';

describe('TechAndSkillComponent', () => {
  let component: TechAndSkillComponent;
  let fixture: ComponentFixture<TechAndSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechAndSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechAndSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
