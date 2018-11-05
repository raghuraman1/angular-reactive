import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorFBComponent } from './profile-editor-fb.component';

describe('ProfileEditorFBComponent', () => {
  let component: ProfileEditorFBComponent;
  let fixture: ComponentFixture<ProfileEditorFBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorFBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
