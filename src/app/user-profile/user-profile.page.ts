import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  public items: any = [];
  profiles: Profile[];

  constructor(private profileService: ProfileService) {
    this.items = [
      { expanded: false }
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  ngOnInit() {
    this.profileService.getProfiles().subscribe(res => {
      this.profiles = res;
    })
  }

}
