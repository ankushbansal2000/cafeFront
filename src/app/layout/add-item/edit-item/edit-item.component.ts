import { AuthService } from './../../../service/auth.service';
import { AddItems } from './../../../model/add-items';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  chargeId: number;
  public addItems = {} as AddItems[];
  name: string;
  price: string;
  quantity: string;
  image: File;
  desc: string; 
  constructor(public activeRoute: ActivatedRoute,public location: Location , private apiService: AuthService) { }

  ngOnInit() { 
    this.chargeId = this.activeRoute.snapshot.params['id'];
    console.log(this.chargeId);
    this.getItemForUpdate();
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
  goBack() {
    this.location.back();
  }
  getItemForUpdate() {
    this.apiService.getItemForUpdate(this.chargeId).subscribe(data => {
      console.log(data);
      this.addItems = data;
    },
      error => {
        alert(error.error.text);
      });
  }


  addItem() {
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    uploadData.append('price', this.price);
    uploadData.append('quantity', this.quantity);
    uploadData.append('desc', this.desc);
    uploadData.append('image', this.image, this.image.name);
    this.apiService.putItemForUpdate(uploadData).subscribe(data => {
      console.log(data);
      location.reload();
    },
      error => {
        alert(error.error.text);
      });
  }
}
