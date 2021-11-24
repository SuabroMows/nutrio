import { Component } from '@angular/core';
import { questions } from './questons';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion = 0;
  resultView = false;
  questions = questions;
  stat = [];
  form = new FormGroup({
    answer: new FormControl(null),
  });
  nextQuestion() {
    if (this.questions.length > this.currentQuestion + 1) {
      this.questions[this.currentQuestion].selectAnswer = this.form.value.answer;
      this.currentQuestion++;
      this.form.patchValue({
        answer: null
      });
    } else {
      this.resultView = true;
      for (const item of questions) {
        let index = -1;
        for (const i in this.stat) {
          if (this.stat[i].group === item.group){
            index = Number(i);
          }
        }
        if (index === -1) {
          index = this.stat.length;
          this.stat[index] = {
            total: 0,
            score: 0,
            group: item.group
          };
        }
        this.stat[index].total++;
        let a = 0;
        for (const q of item.answers) {
          if (item.selectAnswer && item.selectAnswer === q.text) {
            a += q.val;
          }
        }
        this.stat[index].score += a;
      }
    }
  }
  rigthAnswer(answers) {
    for (const a of answers) {
      if (a.val === 1) {
        return a.text;
      }
    }
  }
}
