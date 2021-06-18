import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inflasi-bulan-ini',
  templateUrl: './inflasi-bulan-ini.page.html',
  styleUrls: ['./inflasi-bulan-ini.page.scss'],
})
export class InflasiBulanIniPage implements OnInit {
  items = []
  constructor(
    private data : AngularFirestore,
    private router : Router
  ) { }

  ngOnInit() {
    this.data.collection('inflasi bulan ini', ref => ref.orderBy('timestamp', 'desc').limit(1)).snapshotChanges().subscribe(serverItems => {
      this.items =[];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      })
    })
  }
  
  tahun(){
    this.router.navigate(['./inflasi-tahun-ke-tahun']);
  }
  andil(){
    this.router.navigate(['./andil-inflasi'])
  }
  bulan(){
    this.router.navigate(['./inflasi-bulan-sebelumnya'])
  }
}
