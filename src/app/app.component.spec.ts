import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { CoreModule } from "./shared/core.module";
import { TestingModule } from "./tests/testing.module";

describe("AppComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestingModule,
                AppModule,
                CoreModule
            ]
        }).compileComponents();
    }));
    it("should create the app", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app     = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'Homepage-FE'", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app     = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("Homepage-FE");
    }));
    it("should render title in a h1 tag", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("h1").textContent).toContain("Welcome to Homepage-FE!");
    }));
});
