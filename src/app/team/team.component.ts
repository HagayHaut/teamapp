import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  // like React props
  @Input() team: string[] = [];
  @Input() index: number = 0;
  current_date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
