import { Component } from '@angular/core';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TechAndSkillsComponent } from './tech-and-skills/tech-and-skills.component';
import { HeaderComponent } from './header/header.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { JobHistoryComponent } from './job-history/job-history.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    ContactInfoComponent,
    TechAndSkillsComponent,
    HeaderComponent,
    HighlightsComponent,
    JobHistoryComponent
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent {

}
