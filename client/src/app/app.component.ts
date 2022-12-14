import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  demoForm: FormGroup;
  task1 = new FormControl("", [Validators.required]);
  team1 = new FormControl("", [Validators.required]);
  teams: any = [];

  constructor(private http:HttpClient, private api: ApiService) {
    this.demoForm = new FormGroup({
      task: this.task1,
      team_id: this.team1
    });
  }
  /**
   * get teams list while loading the component
   */
  ngOnInit(): void {
    const obs1 = this.api.getTeams().subscribe((data) => {
     this.teams = data.result;
     console.log("this.teams",this.teams);
    });
    if(this.teams.length) obs1.unsubscribe();
  }
  /**
   * function to assigened task
   */
  async assigntask() {
    const obs2 = this.api.assigntask(this.demoForm.value).subscribe((data) => {
      alert(data.message);
    });
    obs2.unsubscribe()
  }
}
