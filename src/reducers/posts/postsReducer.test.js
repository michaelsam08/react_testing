import { types } from "./../../actions";
import postsReducer from "./index";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const posts = [
      { title: "test 1" },
      { title: "test 2" },
      { title: "test 3" }
    ];
    const newState = postsReducer(undefined, {
      type: types.Get_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
