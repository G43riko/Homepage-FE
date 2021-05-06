import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {TableConfig} from "../../../../shared/components/abstract-table/table-config";
import {ImageDialogComponent} from "../../../../shared/components/image-dialog/image-dialog.component";
import {Movie} from "../../models/movie.model";
import {MovieListService} from "../../services/movie-list.service";
import {MovieService} from "../../services/movie.service";
import {MovieGuiService} from "../../services/movie-gui.service";

@Component({
    selector: "app-movie-list",
    templateUrl: "./movie-list.component.html",
    styleUrls: ["./movie-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        MovieListService,
    ]
})
export class MovieListComponent {
    public readonly previewType$ = this.movieListService.previewType$;
    public selectedAll = false;
    public readonly movieList$ = this.movieListService.movieList$;
    public readonly movieConfig: TableConfig<Movie & { external: unknown, detail: unknown }> = {
        selection: "multi",
        paginateOptions: [5, 10, 20, 50, 100],
        pageSize: 10,
        stickyEnd: 7,
        paginator: false,
        columns: [
            {
                name: "title",
                label: "Názov"
            },
            {
                name: "directors",
                label$: this.translateService.get("movies.directors"),
                customContent: (row: Movie) => row.directors.map((director) => director.name).join(", ")
            },
            {
                name: "year",
                label: "Rok"
            },
            {
                name: "rating",
                label$: this.translateService.get("movies.ratings"),
                customContent: (row: Movie) => row.rating + " %"
            },
            {
                name: "duration",
                label$: this.translateService.get("movies.duration"),
                customContent: (row: Movie) => row.duration + " min"
            },
            {
                name: "genres",
                label$: this.translateService.get("movies.genres"),
                customContent: (row: Movie) => row.genres.join(", ")
            },
            {
                name: "countries",
                label$: this.translateService.get("movies.countries"),
                customContent: (row: Movie) => row.countries.join(", ")
            },
            {
                name: "external",
                label: ""
            },
            {
                name: "detail",
                label: ""
            }
        ]
    };

    public constructor(
        private readonly dialog: MatDialog,
        private readonly movieService: MovieService,
        private readonly translateService: TranslateService,
        private readonly movieGuiService: MovieGuiService,
        private readonly movieListService: MovieListService
    ) {
    }

    public openMovieImages(urls: string[]): void {
        this.dialog.open(ImageDialogComponent, {
            data: urls
        });
    }

    public setPreviewType(previewType: "table" | "grid"): void {
        this.movieListService.setPreviewType(previewType);
        if (previewType !== "grid") {
            return;
        }
    }

    public selectAll(checkbox: HTMLInputElement): void {
        const elements: NodeListOf<any> = document.getElementsByName("personSelector");
        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = !this.selectedAll;
        }
    }

    public onAddMovieClick(): void {
        // this.dialog.open(ObjectMergeComponent);
        this.movieService.showMovieCreateForm();
    }

    public onLoadNext(): void {
        this.movieListService.loadNext();
    }

    public onSearchPatternChange(value: string): void {
        this.movieListService.searchPatternChange(value);
    }

    public onShowMakerDetailClick(makerId: string): void {
        this.movieService.showMakerDetail(makerId);
    }

    public onShowMovieDetailClick(movieId: string): void {
        this.movieService.showMovieDetail(movieId);
    }

    public onToggleFilterClick(): void {
        this.movieGuiService.toggleMovieFilterOpened();
    }
}
