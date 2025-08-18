import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../../components/tag/tag.component';
import { TechAndSkillComponent } from '../../components/tech-and-skill/tech-and-skill.component';

@Component({
  selector: 'app-tech-and-skills',
  standalone: true,
  imports: [CommonModule, TagComponent, TechAndSkillComponent],
  templateUrl: './tech-and-skills.component.html',
  styleUrl: './tech-and-skills.component.sass'
})
export class TechAndSkillsComponent {
  public skillSets: any = [
    {
      category: 'Frontend',
      skills: ['Angular', 'Vue', 'React', 'Typescript', 'HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Bootstrap', 'promises & asynchrony', 'RxJS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'C#/.NET', 'Java', 'Sprint Boot']
    },
    {
      category: 'APIs',
      skills: ['REST', 'SOAP', 'GraphQL']
    },
    {
      category: 'Databases',
      skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'CosmosDB', 'Firebase', 'Stored Procedures', 'Constraints', 'Triggers', 'Transaction', 'Clusters', 'Primary & Foreign Keys']
    },
    {
      category: 'Cloud Services',
      skills: ['AWS', 'Azure', 'Google Cloud']
    },
    {
      category: 'Testing',
      skills: ['Jest', 'Vitest', 'NUnit', 'MSTest', 'Jasmine', 'Karma', 'Mocha', 'Cypress', 'TDD']
    },
    {
      category: 'Design Patterns',
      skills: ['MVC', 'MVVM', 'Singleton', 'Observer', 'Factory', 'Decorator']
    },
    {
      category: 'Others',
      skills: ['Git', 'GitHub', 'BitBucket', 'Jira', 'Postman', 'Visual Studio', 'Visual Studio Code', 'Docker', 'Kubernetes', 'Kafka', 'Microservices']
    },
  ];
}
