// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styles: [],
// })
// export class HomeComponent implements OnInit {
//   paises: any[] = [];

//   constructor(private http: HttpClient) {
//     this.http
//       .get('https://restcountries.com/v3.1/lang/spa')
//       .subscribe((data: any) => {
//         this.paises = data;
//         console.log(data);
//       });
//   }

//   ngOnInit(): void {}
// }

import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: Boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.mensajeError = ';';

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
}
