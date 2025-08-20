import { Component } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.sass'
})
export class HighlightsComponent {

}
