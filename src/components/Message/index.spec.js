import React from "react";
import { create } from "react-test-renderer";
import Message from "./index";

describe("message", () => {
  it("show a message with session information when session exist", () => {

    const date = new Date(2020, 4, 16, 21, 18, 36);
    const session = {
      username: "myName",
      token: "token",
      date: date,
    };

    jest.mock('moment', () => () => ({format: () => '16-05-2020 T21:18:36'}));

    const message = create(<Message session={session} />);
    const messageResult = message.toJSON();

    expect(messageResult).toMatchSnapshot();
  });
});
