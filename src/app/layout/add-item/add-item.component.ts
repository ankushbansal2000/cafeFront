import { FileResponse, Files } from './../../model/FileResponse';
import { HttpClient } from '@angular/common/http';
import { AddItems } from './../../model/add-items';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public addItems = {} as AddItems;
  constructor(private apiService: AuthService, public router: Router, private http: HttpClient) { }
  image: File;
  itemList: Array<AddItems>;
  ngOnInit() {
    this.getItem(); 
  }

  onPhotoChanges(event) {
    this.image = event.target.files[0];
    this.addImage();
  }

  addItem() {
  this.apiService.addItems(this.addItems).subscribe(data => {
    console.log(data);
  },
    error => {
      alert(error.error.text);
    });
  }

  addImage() {
   let uploadData = new FormData();
    uploadData.append('image', this.image);
    this.apiService.addImage(uploadData).subscribe(data => {
      const apiResponse = data as Files;
      this.addItems.image = apiResponse.image;
    },
      error => {
        alert(error.error.text);
      });
    }

  getItem() {
    this.apiService.getItems().subscribe(data => {
      this.itemList = data;
    },
      error => {
        alert(error.error.text);
      });
  }

}
