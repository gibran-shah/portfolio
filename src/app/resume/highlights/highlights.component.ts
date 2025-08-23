import { Component } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';
import { CompetencyComponent } from '../../components/competency/competency.component';
import { JobSummaryComponent } from '../../components/job-summary/job-summary.component';
import { CommonModule } from '@angular/common';
import { EducationComponent } from '../../components/education/education.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [
    CommonModule,
    TagComponent,
    CompetencyComponent,
    JobSummaryComponent,
    EducationComponent
  ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.sass'
})
export class HighlightsComponent {
  openingSpanTag = '<span class="primary-blurb">';
  jobSummaryBlurbs = [
    `${this.openingSpanTag}Drove development of
    <a href="https://www.aer.ca/applications-and-notices/onestop" target="_blank">OneStop</a>,
    a cloud-based license application platform at Alberta Energy Regulators</span>
    — took charge of <b>React</b> frontend and <b>Node</b> backend.`,
    `${this.openingSpanTag}Took charge of
    <a href="https://www.resourceadvisor.com/" target="_blank">Resource Advisor</a>,
    an energy modeling & forecasting cloud-based platform at Schneider Electric</span>
    — spearheaded development of application and oversaw <b>migration</b> from
    <b>AngularJS</b> to <b>Angular 15</b>.`,
    `${this.openingSpanTag}Led frontend development of ENMOC,
    a medical claim platform at Maximus Canada</span>
    — <b>led a team of eight developers</b> to meet end-user requirements.`,
    `${this.openingSpanTag}Architected CorView, a cloud-based risk
    management platform at Mobiltex Data Ltd.</span>
    — orchestrated development of <b>Angular</b> frontend and <b>.NET</b> backend.`,
    `${this.openingSpanTag}Spearheaded the development of
    <a href="https://bode.ca/" target="_blank">bode.ca</a>,
    a P2P real estate marketplace at Bode Canada</span>
    — headed development of a <b>Vue.js</b> frontend and a <b>Node.js</b> backend.`,
  ]

  educationBlurbs = [
    `<b>Bachelor of Science in Computer Science</b>—University of Calgary`,
    `<b>Bachelor of Arts in Psychology, Honours</b>—University of Calgary`,
    `<b>Courses on C#/.NET, React, Design Patterns, Cloud Platforms, Unit Tests</b>—Udemy.com`,
    `<b>High School Diploma</b>—Central Memorial High School`
  ];
}
