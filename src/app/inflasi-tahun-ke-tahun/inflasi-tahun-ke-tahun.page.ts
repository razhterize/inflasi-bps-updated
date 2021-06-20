import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Chart from 'chart.js/auto'


@Component({
  selector: 'app-inflasi-tahun-ke-tahun',
  templateUrl: './inflasi-tahun-ke-tahun.page.html',
  styleUrls: ['./inflasi-tahun-ke-tahun.page.scss'],
})
export class InflasiTahunKeTahunPage implements OnInit {
  items = [];
  tahun = [];
  persentase = [];

  constructor(
    private data : AngularFirestore
  ) { }

  // Mendapakan data dari firebase pada saat memuat halaman
  ngOnInit() {
    this.data.collection("inflasi tahun ke tahun", ref => ref.orderBy ('tahun', 'asc')).snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
        this.tahun.push(item.tahun);
        this.persentase.push(item.persentase);
      });
    });
    setTimeout(() => {
      this.showChart();
    },1000);
  }
  
  // Menampilkan chart line pada aplikasi
  showChart(){
    var ctx = (<any>document.getElementById('myChart')).getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.tahun,
        datasets: [{
          label: "Persentase Inflasi Tahun ke Tahun",
          data: this.persentase,
          fill: 'start',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options:{
        elements:{
          line:{
            tension: 0
          }
        },
        scales:{
          yAxes:[{
            ticks:{
              beginsAtZero: true,
            }
          }]
        }
      }
    })
  }
}