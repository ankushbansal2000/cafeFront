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
  public addItems = {} as AddItems;
  image: File;
  dummy: AddItems;
  constructor(public activeRoute: ActivatedRoute, public location: Location, private apiService: AuthService) { }

  ngOnInit() {
    this.chargeId = this.activeRoute.snapshot.params['id'];
    this.dummy = new AddItems();
    this.getItemForUpdate();
  }
  onDescriptionChanges(event) {
    this.addItems.desc = event.target.value;
  }
  onPhotoChanges(event) {
    console.log(event);
    this.image = event.target.files[0];
  }
  onQuantityChanges(event) {
    this.addItems.quantity = event.target.value;
  }
  onPriceChanges(event) {
    this.addItems.price = event.target.value;
  }
  onDishNameChanges(event) {
    this.addItems.name = event.target.value;
  }
  goBack() {
    this.location.back();
  }
  getItemForUpdate() {
    this.apiService.getItemForUpdate(this.chargeId).subscribe(data => {
      this.addItems = data;
    },
      error => {
        alert(error.error.text);
      });
  }


  updateItem(uploadData) {
    uploadData = new FormData();
    uploadData.append('name', this.addItems.name);
    uploadData.append('price', this.addItems.price);
    uploadData.append('quantity', this.addItems.quantity);
    uploadData.append('desc', this.addItems.desc);
    if (this.image == undefined) {
   //   uploadData.append('image', this.addItems.image);
    } else {
     // uploadData.append('image', this.image, this.image.name);
    }
    this.apiService.putItemForUpdate(this.chargeId, uploadData).subscribe(data => {
      location.reload();
    },
      error => {
        alert(error.error.text);
      });
  }


}
