import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-od-main',
  templateUrl: './od-main.page.html',
  styleUrls: ['./od-main.page.scss'],
})
export class OdMainPage implements OnInit {

  constructor(
    protected auth : AngularFireAuth,
    private toastCtrl : ToastController,
    public router : Router,
  ) { }

  ngOnInit() {
    this.auth.authState.subscribe(async data => {
      if (data && data.email && data.uid){
      }
      else {
        const toast = await this.toastCtrl.create({
          message: 'Anda belum Login. Silahkan Login terlebih dahulu',
          position: 'bottom',
          duration: 1000
        });
        toast.present();
        this.router.navigate(['/login'])
      }
    })
  }

  ibi(){
    this.router.navigate(['/inflasi-bulan-ini-od'])
  }

  itkt(){
    this.router.navigate(['/inflasi-tahun-ke-tahun-od'])
  }
  ai(){
    this.router.navigate(['/andil-inflasi-od'])
  }
  ibs(){
    this.router.navigate(['/inflasi-bulan-sebelumnya-od'])
  }

  async logout(){
        const res = await this.auth.signOut();
      }

}
