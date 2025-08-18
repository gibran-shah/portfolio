import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-and-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-and-skill.component.html',
  styleUrl: './tech-and-skill.component.sass'
})
export class TechAndSkillComponent {
  @Input() category: string = '';
  @Input() skills: string[] = [];
}
