import { Files } from './../../../model/FileResponse';
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

  onPhotoChanges(event) {
    this.image = event.target.files[0];
    this.addImage();
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

  updateItem(uploadData) {
    this.apiService.putItemForUpdate(this.chargeId, this.addItems).subscribe(data => {
      location.reload();
    },
      error => {
        alert(error.error.text);
      });
  }


}
