import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAyIaJ3Ck0XpTnmrW31ubeROq-0EFK9TXqUWcylMjp1OkouYIM8xghFjsxqK1l82TyPUqE0CF7WJ1YHdfg',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQB4ihbiSLFJUopogy1Xt9CowM_cRsn5b2c28iV2VjAtOysmKlpiXC6NiwcqXRCd0wWZnTswl-tBblFculk',
    // });

    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }
  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQB4ihbiSLFJUopogy1Xt9CowM_cRsn5b2c28iV2VjAtOysmKlpiXC6NiwcqXRCd0wWZnTswl-tBblFculk',
    // });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(
    //   map((data: any) => data['artists'].items)
    // );
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data['tracks'])
    );
  }
  // .subscribe((data) => {
  //   console.log(data);
  // });
}
