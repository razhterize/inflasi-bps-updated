import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    protected auth : AngularFireAuth,
    public router : Router,
    private toastCtrl : ToastController
  ) { }

  async ngOnInit() {
    this.auth.authState.subscribe(data => {
      if (data && data.email && data.uid){
        this.router.navigate(['/od-main'])
      }
    })
  }

  async login(){
    const { username, password } = this
    try {
      const res = await this.auth.signInWithEmailAndPassword(username, password);
      if (res){
        this.router.navigate(['/od-main']);
        this.username = '';
        this.password = '';
      }
    }
    catch(err){
      console.dir(err);
      if (err){
        const toast = await this.toastCtrl.create({
          message: "Username atau Password tidak dikenali. Silahkan Masukkan Username dan Password dengan benar",
          position: 'bottom',
          duration: 1000
        })
        await toast.present();
      }
    }
  }
}
 