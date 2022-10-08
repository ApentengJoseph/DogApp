import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DogapiService } from '../dogapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() name!: any;
  @Input() randomImagesData!: any;
  sub!: Subscription;
  breeds!: [] | any;
  subBreed!: [] | any;

  constructor(private dogApiService: DogapiService) {}

  ngOnInit(): void {
    this.getBreeds();
    this.getSubBreeds();
  }

  getBreeds() {
    //This code gets all the dog breeds and pass it to this.breed property for DOM display.
    this.sub = this.dogApiService.getBreeds().subscribe(
      (data = []) => {
        this.breeds = Object.keys(data.message);
      },
      (err) => console.log(err)
    );
  }

  getSubBreeds() {
    // This piece of  code below gets sub breeds of dogs and pass it to this.subbreed for display in the the template using *ngFor.
    this.sub = this.dogApiService.getsubBreed().subscribe(
      (data = []) => {
        return (this.subBreed = data.message);
      },
      (err) => console.log(err)
    );
  }
}
