import { Component, OnInit } from "@angular/core";
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { UploadTaskSnapshot } from "@angular/fire/storage/interfaces";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { NotificationService } from "../../../shared/services/notification.service";
import { User } from "../../../shared/models/auth.model";
import { AppConfig } from "../../../app.config";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
    selector: "app-file-upload",
    templateUrl: "./file-upload.component.html",
    styleUrls: ["./file-upload.component.scss"],
})
export class FileUploadComponent implements OnInit {
    public percentage: Observable<number | undefined>;
    public snapshot: Observable<UploadTaskSnapshot | undefined>;
    public downloadUrl: Observable<string>;
    public isHovering: boolean;
    private task: AngularFireUploadTask;

    public constructor(private readonly storage: AngularFireStorage,
                       public readonly authService: AuthService,
                       private readonly notificationService: NotificationService) {
    }

    public ngOnInit(): void {
    }

    public toggleHover(event: boolean): void {
        this.isHovering = false;
    }

    public startUpload(event: FileList, user: User): void {
        const file = event.item(0);

        if (file) {
            if (file.type.split("/")[0] !== "image") {
                this.notificationService.showErrorMessage("Unsupported file format");
                return;
            }

            const path = `images/${new Date().getTime()}_${file.name}`;
            const ref = this.storage.ref(path);
            const customMetadata = {
                app: AppConfig.TITLE,
                uploadedBy: user.uid,
                active: "true",
            };

            this.task = this.storage.upload(path, file, {customMetadata});
            this.percentage = this.task.percentageChanges();
            this.snapshot = this.task.snapshotChanges().pipe(finalize(() => {
                this.downloadUrl = ref.getDownloadURL();
            }));
        }
    }

    public isActive(snapshot: UploadTaskSnapshot): boolean {
        return snapshot.state === "running" && snapshot.bytesTransferred < snapshot.totalBytes;
    }

}