import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferenciaPage } from './transferencia.page';

describe('TransferenciaPage', () => {
  let component: TransferenciaPage;
  let fixture: ComponentFixture<TransferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
