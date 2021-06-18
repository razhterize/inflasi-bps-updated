import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OdInflasiBulanSebelumnyaPage } from './od-inflasi-bulan-sebelumnya.page';

describe('OdInflasiBulanSebelumnyaPage', () => {
  let component: OdInflasiBulanSebelumnyaPage;
  let fixture: ComponentFixture<OdInflasiBulanSebelumnyaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OdInflasiBulanSebelumnyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OdInflasiBulanSebelumnyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
