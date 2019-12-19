import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Browse, BrowseService } from 'src/app/services/browse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {
  browses: Browse[];

  constructor(public navCtrl : NavController,
    private browseService: BrowseService,
    private router: Router) { 
    // this.generateProjects();
  }

  ngOnInit() {
    this.browseService.getBrowses().subscribe(res => {
      this.browses = res;
    });
  }

  onTest(){
    this.router.navigateByUrl('/home/tabs/browse/new-browse');
  }

  projects : string[];

  // generateProjects(){
  //   this.projects = [
  //     'test',
  //     'mantap',
  //     'ms',
  //     'asdf'
  //   ];
  // }

  getProjects(ev: any){
    // this.generateProjects();
    let serVal = ev.target.value;
    if(serVal && serVal.trim() != ''){
      this.projects = this.projects.filter((project) => {
        return (project.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

  
  details(id){
    this.router.navigateByUrl('/home/tabs/browse/' + id);
  }
}
