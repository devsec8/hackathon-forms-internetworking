import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from 'src/app/interfaces/form.interface';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formsTableColumns: string[] = ['createdAt','category', 'title'];
  forms: Form[] = [];
  formsPageLimit = 10;
  isLoadingResults = true;


  // @ViewChild(MatSort) sort = new MatSort();

  constructor() { }

  ngOnInit(): void {
    this.initList();
    setTimeout(() => {
      console.log('loading forms');
      this.isLoadingResults = false;

    }
    , 1000);
    
    
  }

  initList() {

    // TODO: remove these lines after testing
    const date = new Date();
    const form1: Form = {title: "טופס יום ספורט", createdAt: date, category: "טפסי לוטם" }
    const form2: Form = {title: "טופס תלונה", createdAt: date, category: "משמעתי" }
    const form3: Form = {title: "הצהרת בריאות", createdAt: date, category: "רפואי" }
    const form4: Form = {title: "טופס משיכת נשק מחוץ ליחידה", createdAt: date, category: "כללי" }
    const form5: Form = {title: "טופס משיכת נשק בתוך היחידה", createdAt: date, category: "כללי" }
    this.forms.push(form1);
    this.forms.push(form2);
    this.forms.push(form3);
    this.forms.push(form4);
    this.forms.push(form5);
  }

}
