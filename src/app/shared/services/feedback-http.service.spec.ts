import { TestBed } from "@angular/core/testing";

import { FeedbackHttpService } from "./feedback-http.service";

describe("FeedbackService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: FeedbackHttpService = TestBed.get(FeedbackHttpService);
    expect(service).toBeTruthy();
  });
});
