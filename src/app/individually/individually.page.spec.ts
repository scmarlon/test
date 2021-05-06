import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividuallyPage } from './individually.page';

describe('IndividuallyPage', () => {
  let component: IndividuallyPage;
  let fixture: ComponentFixture<IndividuallyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuallyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividuallyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
