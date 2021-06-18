import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-inflasi-bulan-sebelumnya',
  templateUrl: './inflasi-bulan-sebelumnya.page.html',
  styleUrls: ['./inflasi-bulan-sebelumnya.page.scss'],
})
export class InflasiBulanSebelumnyaPage implements OnInit{
  @ViewChild('popTahun') popTahun : IonSelect;
  @ViewChild('popBulan') popBulan : IonSelect;

  tahun = []
  items = []
  thn;
  bln;
  pilihBulan= ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];


  constructor(
    private data : AngularFirestore
    ) { }

  ngOnInit() {
    this.data.collection("inflasi tiap tahun", ref => ref.orderBy ('sort', 'desc')).snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
        this.tahun.push(item.tahun);
      });
    })
    setTimeout(() => {
      this.autoOpen()
    }, 1000)
  }

  setBulan(){
    if (!this.thn){
      this.bln = "";
    } else {
      setTimeout(() => {
        this.popBulan.open()
      }, 200)
    }
  }
  autoOpen(){
    this.popTahun.open()
  }
  bulan(){
    if (this.thn){
      this.popBulan.open();
    }
  }
}
