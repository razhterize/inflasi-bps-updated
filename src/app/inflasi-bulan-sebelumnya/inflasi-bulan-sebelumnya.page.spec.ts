import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InflasiBulanSebelumnyaPage } from './inflasi-bulan-sebelumnya.page';

describe('InflasiBulanSebelumnyaPage', () => {
  let component: InflasiBulanSebelumnyaPage;
  let fixture: ComponentFixture<InflasiBulanSebelumnyaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InflasiBulanSebelumnyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InflasiBulanSebelumnyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
