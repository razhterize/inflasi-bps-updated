import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'andil-inflasi',
    loadChildren: () => import('./andil-inflasi/andil-inflasi.module').then( m => m.AndilInflasiPageModule)
  },
  {
    path: 'inflasi-bulan-sebelumnya',
    loadChildren: () => import('./inflasi-bulan-sebelumnya/inflasi-bulan-sebelumnya.module').then( m => m.InflasiBulanSebelumnyaPageModule)
  },
  {
    path: 'od-inflasi-bulan-sebelumnya',
    loadChildren: () => import('./od-inflasi-bulan-sebelumnya/od-inflasi-bulan-sebelumnya.module').then( m => m.OdInflasiBulanSebelumnyaPageModule)
  },
  {
    path: 'inflasi-tahun-ke-tahun',
    loadChildren: () => import('./inflasi-tahun-ke-tahun/inflasi-tahun-ke-tahun.module').then( m => m.InflasiTahunKeTahunPageModule)
  },
  {
    path: 'od-inflasi-tahun-ke-tahun',
    loadChildren: () => import('./od-inflasi-tahun-ke-tahun/od-inflasi-tahun-ke-tahun.module').then( m => m.OdInflasiTahunKeTahunPageModule)
  },
  {
    path: 'inflasi-bulan-ini',
    loadChildren: () => import('./inflasi-bulan-ini/inflasi-bulan-ini.module').then( m => m.InflasiBulanIniPageModule)
  },
  {
    path: 'od-inflasi-bulan-ini',
    loadChildren: () => import('./od-inflasi-bulan-ini/od-inflasi-bulan-ini.module').then( m => m.OdInflasiBulanIniPageModule)
  },
  {
    path: 'od-main',
    loadChildren: () => import('./od-main/od-main.module').then( m => m.OdMainPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'od-andil-inflasi',
    loadChildren: () => import('./od-andil-inflasi/od-andil-inflasi.module').then( m => m.OdAndilInflasiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
