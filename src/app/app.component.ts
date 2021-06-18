import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [{
    pagename:"Beranda",
    icon:"home-outline",
    url:"/home"
  },{
    pagename:"Inflasi",
    icon:"trending-up-outline",
    url:"/inflasi-bulan-ini"
  },{
    pagename:"Olah Data",
    icon:"hammer",
    url:"/login"
  }]
  constructor(
    private platform : Platform,
    private alert : AlertController,
    private router : Router,
    //private statusBar : StatusBar
  ){
    this.init()
  }

  init(){
    this.platform.ready().then(() => {
      //this.statusBar.backgroundColorByHexString('#428cff')
    })
  }

  goTo(page){
    this.router.navigate([page.url])
  }
  async keluar(){
    const alert = await this.alert.create({
      header: 'Keluar',
      message: 'Apakah anda yakin ingin keluar?',
      buttons:[
        {
          text: "Tidak",
          handler: () =>(
            console.log("Confirm Cancel")
          )
        },
        {
          text: "Iya",
          handler: () => (
            navigator['app'].exitApp()
          )
        }
      ]
    });
    await alert.present();
  }
}
