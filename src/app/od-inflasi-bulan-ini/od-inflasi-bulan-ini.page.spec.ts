import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OdInflasiBulanIniPage } from './od-inflasi-bulan-ini.page';

describe('OdInflasiBulanIniPage', () => {
  let component: OdInflasiBulanIniPage;
  let fixture: ComponentFixture<OdInflasiBulanIniPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OdInflasiBulanIniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OdInflasiBulanIniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
