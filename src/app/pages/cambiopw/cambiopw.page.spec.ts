import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiopwPage } from './cambiopw.page';

describe('CambiopwPage', () => {
  let component: CambiopwPage;
  let fixture: ComponentFixture<CambiopwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiopwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiopwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
