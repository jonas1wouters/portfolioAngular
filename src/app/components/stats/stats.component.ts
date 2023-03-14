import { Component } from '@angular/core';
import { Statistic } from 'src/app/interfaces/statistic';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats: Array<Statistic> = [
    {statId: 0, statLabel: "LinkedIn <b>certificates</b>", stat: "12"},
    {statId: 1, statLabel: "<b>Finished projects</b>", stat: "15"},
  ]
}
