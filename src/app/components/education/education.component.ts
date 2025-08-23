import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.sass'
})
export class EducationComponent {
  @Input() educationDescription = '';
}
