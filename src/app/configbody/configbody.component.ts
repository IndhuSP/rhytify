import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-configbody',
  templateUrl: './configbody.component.html',
  styleUrls: ['./configbody.component.css']
})

export class ConfigbodyComponent implements OnInit {
  SelectedProject: string;
  projectsc: string[] = ['TFS', 'GIT', 'SVN'];
  projectus: string[] = ['TFS', 'RHYTIFY'];
  projecttask: string[] = ['TFS', 'RHYTIFY'];
  projecttcm: string[] = ['TFS', 'UTMS' , 'RHYTIFY'];
  projectbugs: string[] = ['TFS', 'RHYTIFY'];
  constructor() { }
  ngOnInit() {
  }

}

