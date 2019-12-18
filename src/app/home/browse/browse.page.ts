import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  constructor(public navCtrl : NavController) { 
    this.generateProjects();
  }

  ngOnInit() {
  }

  projects : string[];

  generateProjects(){
    this.projects = [
      'test',
      'mantap',
      'ms',
      'asdf'
    ];
  }

  getProjects(ev: any){
    this.generateProjects();
    let serVal = ev.target.value;
    if(serVal && serVal.trim() != ''){
      this.projects = this.projects.filter((project) => {
        return (project.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }


}
