import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OdAndilInflasiPage } from './od-andil-inflasi.page';

describe('OdAndilInflasiPage', () => {
  let component: OdAndilInflasiPage;
  let fixture: ComponentFixture<OdAndilInflasiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OdAndilInflasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OdAndilInflasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
