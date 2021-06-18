import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-od-inflasi-bulan-ini',
  templateUrl: './od-inflasi-bulan-ini.page.html',
  styleUrls: ['./od-inflasi-bulan-ini.page.scss'],
})
export class OdInflasiBulanIniPage implements OnInit {
  items = [];
  ibi: String = '';

  constructor(
    protected auth : AngularFireAuth,
    private toastCtrl : ToastController,
    public router : Router,
    protected data : AngularFirestore
  ) { }

  ngOnInit() {
    this.loginstatus();

    this.data.collection("inflasi bulan ini", ref => ref.orderBy ('timestamp', 'desc').limit(1)).snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }


  private loginstatus() {
    this.auth.authState.subscribe(async (data) => {
      if (data && data.email && data.uid) {
      }
      else {
        const toast = await this.toastCtrl.create({
          message: 'ANDA BELUM LOGIN, SILAHKAN LOGIN DAHULU',
          position: 'bottom',
          duration: 1000
        });
        toast.present();
        this.router.navigate(['/login']);
      }
    });
  }
  async update(item) {
    const res = this.data.doc(`inflasi bulan ini/${item.id}`).update({
      persentase: this.ibi,
      timestamp: new Date()
    })
    if (res) {
      const toast = await this.toastCtrl.create({
        message: 'UPDATE BERHASIL',
        position: 'bottom',
        duration: 1000
      });
      toast.present();
    }
    this.ibi = "";
  }

}
