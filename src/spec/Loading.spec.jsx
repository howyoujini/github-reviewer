import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";

test("Loading component should show text prop", () => {
  const TEXT = "hello world";

  render(<Loading text={TEXT} />);
  expect(screen.getByText(TEXT)).toBeInTheDocument();
});

test("updates content per speed designed", async () => {
  const TEXT = "hello world";
  const SPEED = 300;

  vi.useFakeTimers();

  render(<Loading text={TEXT} />);
  screen.debug();

  await vi.advanceTimersByTimeAsync(SPEED);
  expect(screen.getByText(TEXT + ".")).toBeInTheDocument();

  await vi.advanceTimersByTimeAsync(SPEED);
  expect(screen.getByText(TEXT + "..")).toBeInTheDocument();

  await vi.advanceTimersByTimeAsync(SPEED);
  expect(screen.getByText(TEXT + "...")).toBeInTheDocument();

  vi.clearAllTimers();
});
