import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-patient-response',
  templateUrl: './patient-response.component.html',
  styleUrls: ['./patient-response.component.css']
})

export class PatientResponseComponent implements OnInit {
  allQuestions: any;
  allResponses: any;
  progressData: any;
  mappedQuestionAnswer: any;
  p_id: string



  constructor(private data: DataService
              ,private route:ActivatedRoute) {
    this.progressData = []
    this.p_id = '0'
  }

  ngOnInit(): void {
    this.p_id = this.route.snapshot.params['pid']
    this.getProgressData()
  }

  getProgressData() {
    this.data.getSectionProgress(this.p_id).subscribe(
      value => {
        console.log(value)
        this.progressData = value.section
          .filter((v:any) => v.id > 0)
          .map((d:any) => ({title: d.title, id: d.id}))
        console.log("progress data is")
        console.log(this.progressData)
      },
      err => {
        console.log(err)
      }
    )
  }

  getQuestions(event: Event) {
    let s_id = (event.target as HTMLInputElement).value
    console.log("section id is "+s_id);
    console.log("patient id is "+this.p_id);
    forkJoin([
      this.data.getQuestionBySectionId(s_id),
      this.data.getResponseBySectionId(s_id, this.p_id)
    ])
      .subscribe(
        (data: any) => {
          this.mappedQuestionAnswer = this.getMappedQuestionAnswer(data[0], data[1])
          console.log("questions is ",data[0])
          console.log("responses is", data[1])
          console.log("mapped questiness andwer is ")
          console.log(this.mappedQuestionAnswer)

        },
        (err: any) => console.log(err)
      )
  }

  getMappedQuestionAnswer(allQuestions: any, allResponses: any) {
    let mappedData = allQuestions.map((question: any) => {
      let response = allResponses.find((response: any) => response.id === question.id)
      return {question, response}
    })
    return mappedData
  }

}
