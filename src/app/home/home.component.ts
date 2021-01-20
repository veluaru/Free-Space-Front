import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response= ''
  params= ''
  str=''
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(formData: String){
    console.log(formData)
     this.http.get<any>("http://localhost:8000/"+this.params).subscribe(formData => {
       this.str = formData.replaceAll(/,/g, '\n');
       this.response = this.str.replace(/{|}|'solve':|'/g,'');
       console.log("response", this.response)
    },error => this.response = error);
  }
}
