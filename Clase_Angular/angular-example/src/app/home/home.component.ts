import { Component, OnInit } from '@angular/core';
import {ApiService} from './'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get().subscribe(
      (data: any) => {
        console.log(data)
        this.products = data
      }
    )
  }

}
