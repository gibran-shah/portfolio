import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'portfolio';
}
