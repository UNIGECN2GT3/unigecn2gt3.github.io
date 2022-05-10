import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { QuestionSet } from 'src/app/interfaces/question-set';

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Input('quiz') quiz: QuestionSet[];
  @ViewChild('anchor') anchor: ElementRef;

  numberOfQuestions: number;
  currentQuestion: number = 1;

  selectedAnswer: number[] = [];
  reasonShown: boolean = false;

  correctAnswers: number = 0;
  Math = Math;

  ngOnInit(): void {
    this.numberOfQuestions = this.quiz.length;
    this.shuffleArray(this.quiz);
  }

  onClick(event, index) {
    if (this.reasonShown) {
      return;
    }
    const responses = document.getElementById('responses');
    //Array.from(responses.children).forEach(x => x.classList.remove('alert-primary'));
    if (this.selectedAnswer.includes(parseInt(index, 10))) {
      (event.target as HTMLDivElement).classList.remove('alert-primary');
      this.selectedAnswer.splice(this.selectedAnswer.indexOf(parseInt(index, 10)), 1);
    } else {
      (event.target as HTMLDivElement).classList.add('alert-primary');
      this.selectedAnswer = this.selectedAnswer.concat(parseInt(index, 10));
    }
  }

  onVerify(): void {
    if (this.selectedAnswer.length == 0) {
      return;
    }
    const responses = document.getElementById('responses');
    Array.from(responses.children).forEach(x =>  x.classList.remove('selected'));

    this.reasonShown = true;

    if (JSON.stringify(this.selectedAnswer) === JSON.stringify(this.quiz[this.currentQuestion - 1].correct)) {
      this.correctAnswers += 1;
    }

    // tslint:disable-next-line: triple-equals
    for (let i = 0; i < responses.children.length; i++) {
      if (this.selectedAnswer.includes(i + 1) && this.quiz[this.currentQuestion - 1].correct.includes(i + 1)) {
        document.getElementById('response-' + (i + 1)).classList.add('alert-success');
      } else if (this.quiz[this.currentQuestion - 1].correct.includes(i + 1)) {
        document.getElementById('response-' + (i + 1)).classList.add('alert-danger');
        //document.getElementById('response-' + this.quiz[this.currentQuestion - 1].correct).classList.add('alert-success');
      }
    }

  }

  onNextQuestion(): void {
    this.currentQuestion += 1;
    this.selectedAnswer = [];
    this.reasonShown = false;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getColor(score: number): string {
    if (score >= 75) {
      return 'result-green';
    } else if (score >= 50) {
      return 'result-orange';
    } else if (score >= 25) {
      return 'result-red-light';
    } else {
      return 'result-red';
    }
  }

  reload()  {
    location.reload()
  }
}
