import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  errorMessage = '';

  newMemberName = '';
  members: string[] = [];

  numTeams: number | '' = '';
  teams: string[][] = [];

  onNameInput(member: string) {
    this.newMemberName = member;
  }

  onNumTeamsInput(value: string) {
    this.numTeams = parseInt(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't ne empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  generateTeams() {
    if (!this.numTeams || this.numTeams < 0) {
      this.errorMessage = "Number of teams can't be empty";
      return;
    }
    if (this.numTeams > this.members.length) {
      this.errorMessage =
        "Number of teams can't be greater than the number of members";
      return;
    }

    this.errorMessage = '';
    const membersCopy = [...this.members];
    const teamsConstructor: string[][] = Array(this.numTeams)
      .fill([])
      .map(() => []);

    let i = 0;
    while (membersCopy.length) {
      const randomIdx = Math.floor(Math.random() * membersCopy.length);
      const randomMember = membersCopy[randomIdx];
      membersCopy.splice(randomIdx, 1);
      teamsConstructor[i % this.numTeams].push(randomMember);
      i++;
    }
    this.members = [];
    this.teams = teamsConstructor;
    console.log(this.teams);
  }
}
