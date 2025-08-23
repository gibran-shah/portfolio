import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-job-summary',
  standalone: true,
  imports: [],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class JobSummaryComponent {
  @Input() blurb = '';
}
