import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DifficultyPage } from './difficulty.page';

describe('DifficultyPage', () => {
  let component: DifficultyPage;
  let fixture: ComponentFixture<DifficultyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DifficultyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
