import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { Email } from "../../../../shared/models/person/email.model";

@Component({
    selector   : "app-email",
    templateUrl: "./email.component.html",
    styleUrls  : ["./email.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComponent {
    @Input() public disabled           = true;
    @Input() public emailList: Email[] = [];
    @Input() public isNew: boolean;
    public readonly showInactive       = new FormControl(false);
    public readonly values             = new FormControl("", Validators.email);

    public readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    public add(event: MatChipInputEvent): void {
        if (this.values.errors) {
            return;
        }
        const input = event.input;
        const value = event.value;

        if ((value || "").trim()) {
            this.emailList.push(new Email(value.trim()));
        }

        if (input) {
            input.value = "";
        }
    }

    public remove(index: number): void {
        if (index >= 0) {
            this.emailList.splice(index, 1);
        }
    }
}
