import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../../../app.config";
import { AbstractHttpService } from "../../../shared/services/abstract-http.service";
import { AuthService } from "../../../shared/services/auth.service";
import { NotificationService } from "../../../shared/services/notification.service";
import { DailyMenu } from "../models/daily-menu.model";

const URL = AppConfig.BASE_URL + "/menus/restaurant";

@Injectable()
export class DailyMenuHttpService extends AbstractHttpService<DailyMenu> {
    public constructor(http: HttpClient, authService: AuthService, notificationService: NotificationService) {
        super(http, authService, notificationService);
    }

    public getDailyMenuFor(restaurantKey: string): Observable<DailyMenu> {
        return this.http.get<DailyMenu>(URL + "/" + restaurantKey);
    }
}