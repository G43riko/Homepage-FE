import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, shareReplay } from "rxjs/operators";
import { AppStaticConfig } from "../../appStaticConfig";
import { AbstractHttpService } from "./abstract-http.service";
import { AuthService } from "./auth.service";
import { NotificationService } from "./notification.service";

@Injectable({
    providedIn: "root"
})
export class UtilsService extends AbstractHttpService {
    public constructor(http: HttpClient, authService: AuthService, notificationService: NotificationService) {
        super(http, authService, notificationService);
    }

    public readonly countries$ = this.fetchCountries().pipe(
        shareReplay(1),
    );

    public fetchCountries(): Observable<string[]> {
        return this.http.get<string[]>(AppStaticConfig.BASE_URL + "/utils/countries", {
            headers: this.getHeaders()
        })
                   .pipe(
                       catchError(this.handleError<string[]>("fetchCountries"))
                   );
    }
}
