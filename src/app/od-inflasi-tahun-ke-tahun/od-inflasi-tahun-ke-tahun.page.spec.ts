import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OdInflasiTahunKeTahunPage } from './od-inflasi-tahun-ke-tahun.page';

describe('OdInflasiTahunKeTahunPage', () => {
  let component: OdInflasiTahunKeTahunPage;
  let fixture: ComponentFixture<OdInflasiTahunKeTahunPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OdInflasiTahunKeTahunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OdInflasiTahunKeTahunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
