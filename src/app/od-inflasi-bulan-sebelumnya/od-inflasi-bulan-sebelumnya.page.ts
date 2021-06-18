import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-od-inflasi-bulan-sebelumnya',
  templateUrl: './od-inflasi-bulan-sebelumnya.page.html',
  styleUrls: ['./od-inflasi-bulan-sebelumnya.page.scss'],
})
export class OdInflasiBulanSebelumnyaPage implements OnInit {
  items = [];
  thn: string;
  tahun: string = "";
  bulan: string = "";
  persentase: string = "";
  pilihBulan= ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
  constructor(
    protected auth : AngularFireAuth,
    protected data : AngularFirestore,
    private toastCtrl : ToastController,
    public router : Router
    ) { }

  ngOnInit() {
    this.loginstatus();
    this.data.collection("inflasi tiap tahun", ref => ref.orderBy ('sort', 'desc')).snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }

  getYear(){
    this.tahun = this.thn.substring(0,4);
  }

    private loginstatus() {
      this.auth.authState.subscribe(async (data) => {
        if (data && data.email && data.uid) {
        }
        else {
          const toast = await this.toastCtrl.create({
            message: 'Anda belum Login. Silahkan login terlebih dahulu',
            position: 'bottom',
            duration: 1000
          });
          toast.present();
          this.router.navigate(['/login']);
        }
      });
    }

  
    async add(){
      const res = this.data.collection('inflasi tiap tahun').add({
        tahun: this.tahun,
        bulan: this.bulan,
        persentase: this.persentase,
        sort: firebase.default.firestore.FieldValue.serverTimestamp(),
      })
      if (res) {
        const toast = await this.toastCtrl.create({
          message: 'Berhasil menambahkan data',
          position: 'bottom',
          duration: 1000
        });
        toast.present();
      }
      this.thn = "";
      this.bulan = "";
      this.persentase = "";
    }
  
    async update(item) {
      const res = this.data.doc(`inflasi tiap tahun/${item.id}`).update({
        persentase: this.persentase
      })
      if (res) {
        const toast = await this.toastCtrl.create({
          message: 'Data telah diperbarui',
          position: 'bottom',
          duration: 1000
        });
        toast.present();
      }
      this.persentase = "";
    }
  
    async delete(item) {
      const res = this.data.doc(`inflasi tiap tahun/${item.id}`).delete()
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
