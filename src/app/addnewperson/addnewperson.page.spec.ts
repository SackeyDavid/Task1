import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnewpersonPage } from './addnewperson.page';

describe('AddnewpersonPage', () => {
  let component: AddnewpersonPage;
  let fixture: ComponentFixture<AddnewpersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewpersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewpersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
