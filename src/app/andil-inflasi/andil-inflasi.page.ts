import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-andil-inflasi',
  templateUrl: './andil-inflasi.page.html',
  styleUrls: ['./andil-inflasi.page.scss'],
})
export class AndilInflasiPage implements OnInit {
  items = [];

  constructor(
    private data : AngularFirestore
  ) { }

  ngOnInit() {
    this.data.collection("andil inflasi", ref => ref.orderBy ('timestamp', 'asc')).snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }


}
