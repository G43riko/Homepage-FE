import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { TableConfig } from "../../../../shared/components/abstract-table/table-config";
import { Roles } from "../../../../shared/enums/roles.enum";
import { Person } from "../../../../shared/models/person/person.model";
import { AuthService } from "../../../../shared/services/auth.service";
import { PersonListService } from "./person-list.service";

@Component({
    selector       : "app-person-list",
    templateUrl    : "./person-list.component.html",
    styleUrls      : ["./person-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers      : [
        PersonListService,
    ]
})

export class PersonListComponent {
    public readonly Roles                             = Roles;
    public readonly user$                             = this.authService.user$;
    public readonly personData$: Observable<Person[]> = this.personService.persons$;
    public readonly personConfig: TableConfig         = {
        stickyEnd      : 3,
        columns        : [
            {
                name  : "contacts",
                nowrap: true,
            },
            {
                name         : "name",
                customContent: (person) => (person.name || "") + " " + (person.surName || "")
            },
            {
                name : "nick",
                label: "Nick",
                sort : true
            },
            {
                name : "birthday",
                label: "Birthday",
                sort : true
            },
            {
                name   : "account",
                label  : "Account",
                visible: false
            },
            {
                name  : "options",
                width : "9em",
                nowrap: true,
            }
        ],
        selectOptions  : [
            {
                action: console.log,
                icon  : "delete",
                label : "Delete"
            }
        ],
        stickyHeader   : true,
        selection      : "multi",
        paginateOptions: [5, 10, 20, 50, 100],
        pageSize       : 10,
        paginator      : true
    };

    public constructor(
        private readonly personService: PersonListService,
        private readonly authService: AuthService,
    ) {
    }

    public remove(persons: Person[]): void {
        this.personService.deletePerson(...persons.map((p) => p.id));
    }

    public onAddPersonClick(): void {
        this.personService.showPersonCreateForm();
    }

    public onShowDetailClick(personId: number | string): void {
        this.personService.showDetail(personId);
    }
}
