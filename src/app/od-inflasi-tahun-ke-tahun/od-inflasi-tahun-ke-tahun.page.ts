import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-od-inflasi-tahun-ke-tahun',
  templateUrl: './od-inflasi-tahun-ke-tahun.page.html',
  styleUrls: ['./od-inflasi-tahun-ke-tahun.page.scss'],
})
export class OdInflasiTahunKeTahunPage implements OnInit {
  items = [];
  tahun: string = '';
  persentase: string = '';
  pilihTahun= ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];


  constructor(
    protected auth : AngularFireAuth,
    protected data : AngularFirestore,
    private toastCtrl : ToastController,
    public router : Router
  ) { }

  ngOnInit() {
    this.loginstatus();

    this.data.collection("inflasi tahun ke tahun", ref => ref.orderBy ('tahun', 'asc')).snapshotChanges().subscribe(serverItems => {
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
    const res = this.data.collection('inflasi tahun ke tahun').add({
      tahun: this.tahun,
      persentase: this.persentase
    })
    if (res) {
      const toast = await this.toastCtrl.create({
        message: 'Berhasil menambahkan data',
        position: 'bottom',
        duration: 1000
      });
      toast.present();
    }
    this.tahun = "";
    this.persentase = "";
  }

  async update(item) {
    const res = this.data.doc(`inflasi tahun ke tahun/${item.id}`).update({
      persentase: this.persentase
    })
    if (res) {
      const toast = await this.toastCtrl.create({
        message: 'Data telah dipdate',
        position: 'bottom',
        duration: 1000
      });
      toast.present();
    }
    this.persentase = "";
  }

  async delete(item) {
    const res = this.data.doc(`inflasi tahun ke tahun/${item.id}`).delete()
    if (res) {
      const toast = await this.toastCtrl.create({
        message: 'Berhasil menghapus data',
        position: 'bottom',
        duration: 1000
      });
      toast.present();
    }
  }

}
