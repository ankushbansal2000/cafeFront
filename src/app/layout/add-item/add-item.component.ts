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
  name: string;
  price: string;
  quantity: string;
  image: File;
  desc: string; 
  itemList: Array<AddItems>;
  ngOnInit() {
    this.getItem(); 
  }

  onDescriptionChanges(event) {
    this.desc = event.target.value;
  }
  onPhotoChanges(event) {
    this.image = event.target.files[0];
  }
  onQuantityChanges(event) {
    this.quantity = event.target.value;
  }
  onPriceChanges (event) {
    this.price = event.target.value;
  }
  onDishNameChanges (event) {
    this.name = event.target.value;
  }

  addItem() {
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    uploadData.append('price', this.price);
    uploadData.append('quantity', this.quantity);
    uploadData.append('desc', this.desc);
    uploadData.append('image', this.image, this.image.name);
    this.apiService.addItems(uploadData).subscribe(data => {
      location.reload();
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
