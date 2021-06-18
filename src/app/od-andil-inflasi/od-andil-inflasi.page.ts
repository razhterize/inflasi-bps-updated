import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-od-andil-inflasi',
  templateUrl: './od-andil-inflasi.page.html',
  styleUrls: ['./od-andil-inflasi.page.scss'],
})
export class OdAndilInflasiPage implements OnInit {
  items = [];
  ai: String = '';

  constructor(
    protected auth : AngularFireAuth,
    private toastCtrl : ToastController,
    public router : Router,
    protected data : AngularFirestore
  ) { }

  ngOnInit() {
    this.loginStatus();

    this.data.collection("andil inflasi", ref => ref.orderBy ('timestamp', 'asc')).snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }

  private loginStatus(){
    this.auth.authState.subscribe(async (data) => {
      if (data && data.email && data.uid) {
      }
      else {
        const toast = await this.toastCtrl.create({
          message: 'Anda belum Login. Silahkan Login terlebih dahulu',
          position: 'bottom',
          duration: 1000
        });
        toast.present();
        this.router.navigate(['/login']);
      }
    });
  }

  async add(){
    const res = this.data.collection('andil inflasi').add({
      andil_inflasi: this.ai,
      timestamp: new Date()
    })
    if (res){
      const toast = await this.toastCtrl.create({
        message: 'Tambah data berhasil',
        position: 'bottom',
        duration: 1000,
      })
      toast.present
    }
  }

  async delete(item) {
    const res = this.data.doc(`andil inflasi/${item.id}`).delete()
    if (res) {
      const toast = await this.toastCtrl.create({
        message: 'Delete berhasil',
        position: 'bottom',
        duration: 1000
      });
      toast.present();
    }
  }
}
