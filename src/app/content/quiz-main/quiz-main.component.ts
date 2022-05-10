import { Component, OnInit } from '@angular/core';
import { interval, Subscription,  } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { quiz } from 'src/app/data/quiz';
import { QuestionSet } from 'src/app/interfaces/question-set';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.scss']
})
export class QuizMainComponent implements OnInit {
  quiz = quiz;
  lang: string = 'en';
  numberOfQuizzes: number;
  quizSelected: boolean = true;

  observable: Subscription;
  selectedQuestionSet: QuestionSet[];

  constructor() { }

  ngOnInit(): void {

    this.quizSelected = true;
    this.selectedQuestionSet = this.quiz[this.lang][0 + 1];
    this.observable = interval(1000).pipe(startWith(0)).subscribe({
      next: async () => {
        this.numberOfQuizzes = Object.keys(quiz[this.lang]).length;
      }
    });
  }

  selectQuiz(index: number): void {
    this.quizSelected = true;
    this.selectedQuestionSet = this.quiz[this.lang][index + 1];
  }

  backToMenu(): void {
    this.quizSelected = false;
    this.selectedQuestionSet = null;
  }
}
