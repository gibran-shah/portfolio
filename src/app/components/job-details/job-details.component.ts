import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobHistoryItem } from '../../types';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.sass'
})
export class JobDetailsComponent {
  @Input() job: JobHistoryItem | null = null;
}
