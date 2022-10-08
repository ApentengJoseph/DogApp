import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-imagedialog',
  templateUrl: './imagedialog.component.html',
  styleUrls: ['./imagedialog.component.scss'],
})
export class ImagedialogComponent implements OnInit {
  dogImage!: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.getImageURL();
  }

  getImageURL() {
    //Retrieving the data passed by the openDialog(data) method in the homepage component and setting this.dogImage to the image data retrieved for binding on the template.
    return (this.dogImage = this.data.image);
  }
}
