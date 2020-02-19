import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorcompraPage } from './errorcompra.page';

describe('ErrorcompraPage', () => {
  let component: ErrorcompraPage;
  let fixture: ComponentFixture<ErrorcompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorcompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorcompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
