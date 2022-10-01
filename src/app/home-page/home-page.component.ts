import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DogapiService } from '../dogapi.service';
import { ImagedialogComponent } from '../imagedialog/imagedialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  randomDogImg!: [] | any;
  subBreed = [];
  dogImg!: string;
  sub!: Subscription;
  breeds!: any;
  constructor(private dogApiService: DogapiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.sub = this.dogApiService.getRandomDogsImage().subscribe(
      (data: [] | any) => {
        return (this.randomDogImg = data.message);
      },
      (err) => console.log(err)
    );

    this.sub = this.dogApiService.getBreeds().subscribe(
      (data = []) => {
        this.breeds = Object.keys(data.message);
      },
      (err) => console.log(err)
    );

    this.sub = this.dogApiService.getsubBreed().subscribe(
      (data = []) => {
        return (this.subBreed = data.message);
      },
      (err) => console.log(err)
    );
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  openDialog(data: string): void {
    this.dialog.open(ImagedialogComponent, {
      width: '350px',
      height: '280px',
      data: {
        image: data,
      },
    });
  }
}
