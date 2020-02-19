import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExitocompraPage } from './exitocompra.page';

describe('ExitocompraPage', () => {
  let component: ExitocompraPage;
  let fixture: ComponentFixture<ExitocompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitocompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExitocompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
