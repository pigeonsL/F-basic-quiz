import axios from "axios";
import Resume from "./resume";

jest.mock("axios");
jest.mock("./base", () => "base.url.com");

describe("Resume", () => {
  it("calls resume api", async () => {
    Resume.resume();
    expect(axios.get).toHaveBeenCalledWith("base.url.com/");
  });
});
