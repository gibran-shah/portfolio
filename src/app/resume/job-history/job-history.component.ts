import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobHistoryItem } from '../../types';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';

@Component({
  selector: 'app-job-history',
  standalone: true,
  imports: [CommonModule, JobDetailsComponent],
  templateUrl: './job-history.component.html',
  styleUrl: './job-history.component.sass'
})
export class JobHistoryComponent {
  history: JobHistoryItem[] = [
    {
      companyName: 'Alberta Energy Regulators',
      position: 'Full Stack Developer',
      location: 'Edmonton AB',
      startYear: '2024',
      endYear: 'present',
      skillSummary: ['License Application Platform', 'React', 'Node.js', 'NoSQL', 'Microservices', 'Kafka', 'GraphQL'],
      summary: `Catalyzed enhancements for <a href="https://onestop2.aer.ca/onestop/" target=_blank>OneStop 2.0</a>,
        a React cloud-based platform for submitting license applications for anything from water diversion to well production,
        with the goal of regulating the Alberta energy industry more effectively and efficiently.`,
      highlights: [
        {
          title: 'Frontend Development',
          shortDescription: 'Developed UI features to drive forward application enhancements',
          longDescription: `implemented new modules in React, Node.js, Typescript, and lodash to achieve design goals.
            Applied bug fixes and cleared bottlenecks.
            Took initiative to write Wiki docs and give presentations on new learnings.`
        },
        {
          title: 'Backend Development',
          shortDescription: 'Developed features on backend with Node.js',
          longDescription: `programmed backend with a microservices framework utilizing Node.js,
            Jest, and CosmosDB to enhance performance. Employed GraphQL API to leverage powerful data queries.
            Helped configure Azure services for high quality performance.`
        }
      ]
    }
  ];
}
