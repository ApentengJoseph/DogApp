import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DogapiService } from '../dogapi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  randomDogImg!: [] | any;
  sub!: Subscription;
  constructor(private dogApiService: DogapiService) {}

  ngOnInit(): void {
    //This code gets the random dog images so it can be displayed.
    // It binds the retrieved data to this.randomDogImage so it can be used in the template.
    this.sub = this.dogApiService.getRandomDogsImage().subscribe(
      (data: [] | any) => {
        return (this.randomDogImg = data.message);
      },
      (err) => console.log(err)
    );
  }

  //This lifecycle hook was used for the purpose of unsubscribing from every observable after the component is destroyed.
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
