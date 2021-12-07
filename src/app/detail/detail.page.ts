import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  ProductName : string;
  docDetail : string;
  pic : string;

  constructor(private navCtrl: NavController , private route : ActivatedRoute) {
    this.ProductName = this.route.snapshot.paramMap.get('ProductName');
    this.docDetail = this.route.snapshot.paramMap.get('docDetail');
    this.pic = this.route.snapshot.paramMap.get('pic');
  }
  
  ngOnInit() {
 }

  goToHome() {
    this.navCtrl.navigateBack('');
  }
}
