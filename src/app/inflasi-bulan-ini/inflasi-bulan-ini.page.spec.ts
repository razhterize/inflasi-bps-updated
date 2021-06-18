import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InflasiBulanIniPage } from './inflasi-bulan-ini.page';

describe('InflasiBulanIniPage', () => {
  let component: InflasiBulanIniPage;
  let fixture: ComponentFixture<InflasiBulanIniPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InflasiBulanIniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InflasiBulanIniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
