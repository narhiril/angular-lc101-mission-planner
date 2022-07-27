import { Component, OnInit } from '@angular/core';
import { CrewCandidate } from './crew-candidate';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  currentImageUrl: string = '';
  crew: CrewCandidate[] = [];

  candidates: CrewCandidate[] = [
    new CrewCandidate("Sally Ride", 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'),
    new CrewCandidate("Mae Jemison", 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'),
    new CrewCandidate("Ellen Ochoa", 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'),
    new CrewCandidate("Frederick Gregory", 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'),
    new CrewCandidate("Guion Bluford", 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'),
    new CrewCandidate("Kjell Lindgren", 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'),
    new CrewCandidate("Jeanette Epps", 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg')
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate: CrewCandidate): void {
      if (this.crew.includes(candidate)) {
          this.crew.splice(this.crew.indexOf(candidate), 1); //remove from crew
      } else if (this.crew.length < 3) {
          this.crew.push(candidate);
      }
  }

}
