import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss'],
})
export class PhotogalleryComponent implements OnInit {
  @Input() imageData!: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  //This method opens up the modal passing in the image which was clicked url to the ImageDialog component for display.
  openDialog(data: string): void {
    this.dialog.open(ImagedialogComponent, {
      width: '350px',
      height: '340px',
      data: {
        image: data,
      },
    });
  }
}
