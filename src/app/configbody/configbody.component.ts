import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configbody',
  templateUrl: './configbody.component.html',
  styleUrls: ['./configbody.component.css']
})
export class ConfigbodyComponent implements OnInit {
  SelectedProject: string;
  projects: string[] = ['TFS', 'GIT', 'SVN'];
  constructor() { }

  ngOnInit() {
  }

}

