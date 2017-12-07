import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaPlayerTeamQuestionComponent } from './trivia-player-team-question.component';

describe('TriviaPlayerTeamQuestionComponent', () => {
  let component: TriviaPlayerTeamQuestionComponent;
  let fixture: ComponentFixture<TriviaPlayerTeamQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaPlayerTeamQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaPlayerTeamQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
