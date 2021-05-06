import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {catchError, concatMap, scan, shareReplay, startWith} from "rxjs/operators";
import {AppStaticConfig} from "../../../appStaticConfig";
import {AbstractHttpService} from "../../../shared/services/abstract-http.service";
import {AuthService} from "../../../shared/services/auth.service";
import {NotificationService} from "../../../shared/services/notification.service";
import {PaginatorService} from "../../../shared/utils/paginable-service.model";
import {Maker} from "../models/maker.model";
import {MovieSource} from "../models/movie-source.type";
import {MovieType} from "../models/movie-type.type";
import {Movie} from "../models/movie.model";

const URL          = AppStaticConfig.BASE_URL + "/v2/movies";
const URL_EXTERNAL = AppStaticConfig.BASE_URL + "/v2/external-movies";
const URL_MANIPULATION = AppStaticConfig.BASE_URL + "/movie-manipulation";

@Injectable()
export class MovieHttpService extends AbstractHttpService<Movie> implements PaginatorService<Movie> {
    public constructor(http: HttpClient, authService: AuthService, notificationService: NotificationService) {
        super(http, authService, notificationService, URL);
    }

    public fetchMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(URL + "/?limit=1000")
                   .pipe(
                       catchError(this.handleError<Movie[]>("getMovies"))
                   );
    }
    public bulkSearchMovies(key: string, values: (string | number)[]): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${URL}/bulkSearch/${key}/${values.join(",")}`)
                   .pipe(
                       catchError(this.handleError<Movie[]>("bulkSearchMovies"))
                   );
    }

    public addMovieToDatabaseByExternalIdId(source: MovieSource, id: number | string): Observable<Movie> {
        return this.http.post<Movie>(`${URL_EXTERNAL}/detail/${source}/${id}`, undefined)
            .pipe(
                catchError(this.handleError<Movie>("addMovieToDatabaseByExternalIdId"))
            );
    }

    public getMakers(): Observable<Maker[]> {
        return this.http.get<Maker[]>(URL + "/makers/?limit=1000")
                   .pipe(
                       catchError(this.handleError<Maker[]>("getMakers"))
                   );
    }

    public readonly genres$ = this.fetchGenres().pipe(
        shareReplay(1),
    );

    public fetchGenres(): Observable<string[]> {
        return this.http.get<string[]>(URL + "/genres", {
            headers: this.getHeaders()
        })
                   .pipe(
                       catchError(this.handleError<string[]>("getGenres"))
                   );
    }

    public getMovieHolder(type: "popular" | "top_rated", source: MovieSource): {
        movies$: Observable<Movie[]>,
        loadMore(): void,
        cleanUp(): void,
    } {
        const source$ = new Subject();

        return {
            movies$ : source$.pipe(
                startWith(undefined),
                concatMap((_, index) => this.fetchList(type, index + 1, source)),
                scan((acc, curr) => [...acc, ...curr], [] as Movie[]),
                shareReplay(1),
            ),
            loadMore: () => source$.next(),
            cleanUp : () => source$.complete(),
        };
    }

    private fetchList(type: "popular" | "top_rated", page: number, source: MovieSource): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${URL_EXTERNAL}/list/${type}/${source}`, {
            headers: this.getHeaders(),
            params : {page: String(page)},
        }).pipe(
            catchError(this.handleError<Movie[]>(`fetchList(${type}, ${page})`))
        );
    }

    public getList(count: number, offset = 0, key?: string): Observable<Movie[]> {
        if (key) {
            return this.http
                       .get<Movie[]>(`${URL}/quick-search/${key}?count=${count}&offset=${offset}`)
                       .pipe(
                           catchError(this.handleError<Movie[]>("searchMovies"))
                       );
        }

        return this.http
                   .get<Movie[]>(`${URL}?count=${count}&offset=${offset}`)
                   .pipe(
                       catchError(this.handleError<Movie[]>("getList"))
                   );
    }

    public getCount(): Observable<number> {
        return this.http
                   .get<number>(URL + "/count")
                   .pipe(
                       catchError(this.handleError<number>("getCount"))
                   );
    }

    public getMoviesFromExternalSource(type: MovieSource, key: string): Observable<Movie[]> {
        return this.http
                   .get<Movie[]>(URL_EXTERNAL + "/search/" + type + "/" + key + "?transform=dto")
                   .pipe(
                       catchError(this.handleError<Movie[]>("getMoviesFromExternalSource"))
                   );
    }

    public getMovieDetailFromExternalSource(source: MovieSource, id: string, type: MovieType = "movie"): Observable<Movie> {
        return this.http
                   .get<Movie>(URL_EXTERNAL + "/detail/" + source + "/" + id + "?transform=dto&type=" + type)
                   .pipe(
                       catchError(this.handleError<Movie>("getMovieDetailFromExternalSource"))
                   );
    }

    public getMoviesWithout(key: keyof Movie): Observable<Movie[]> {
        return this.http
            .get<Movie[]>(`${URL_MANIPULATION}/movies-without/${key}?count=40`)
            .pipe(
                catchError(this.handleError<Movie[]>("getMoviesWithout"))
            );
    }
}
