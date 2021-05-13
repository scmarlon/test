import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiPlayerPage } from './multi-player.page';

describe('MultiPlayerPage', () => {
  let component: MultiPlayerPage;
  let fixture: ComponentFixture<MultiPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
