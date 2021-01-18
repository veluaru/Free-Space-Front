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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(formData: String){
    console.log(formData)
     this.http.get<any>("http://localhost:8000/"+this.params).subscribe(formData => {
       this.response = formData;
       console.log("response", this.response)
    },error => this.response = error);
  }
}
