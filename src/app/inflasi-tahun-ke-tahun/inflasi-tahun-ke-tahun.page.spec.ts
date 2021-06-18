import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InflasiTahunKeTahunPage } from './inflasi-tahun-ke-tahun.page';

describe('InflasiTahunKeTahunPage', () => {
  let component: InflasiTahunKeTahunPage;
  let fixture: ComponentFixture<InflasiTahunKeTahunPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InflasiTahunKeTahunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InflasiTahunKeTahunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
