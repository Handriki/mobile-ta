import { Component, OnInit } from '@angular/core';
import { Browse,BrowseService} from 'src/app/services/browse.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-details',
  templateUrl: './browse-details.page.html',
  styleUrls: ['./browse-details.page.scss'],
})
export class BrowseDetailsPage implements OnInit {
  browse: Browse = {
    title: "title",
    nama: "nama",
    details: "details"
  };

  browseId = null;

  constructor(
    private browseService: BrowseService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private navController: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.browseId = this.route.snapshot.params['id'];
    this.router.navigateByUrl('/home/tabs/borwse/' + this.browseId);
    if(this.browseId){
      this.loadBrowse();
    }
  }

  remove(item){
    this.browseService.removeBrowse(item.id);
  }

  async loadBrowse(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.browseService.getBrowse(this.browseId).subscribe(res =>{
      this.browse = res;
      loading.dismiss();
    });
  }

  async saveBrowse(){
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });
    await loading.present();

    if(this.browseId){
      this.browseService.updateBrowse(this.browse, this.browseId).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      })
    }
    else{
      this.browseService.addBrowse(this.browse).then(() => {
        loading.dismiss();
        this.navController.navigateBack('home');
      });
    }
  }
}
