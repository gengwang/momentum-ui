import "./ListItem";
import { ListItem } from "./ListItem";
import { defineCE, elementUpdated, fixture, fixtureCleanup, fixtureSync, oneEvent } from "@open-wc/testing-helpers";
import { PropertyValues } from "lit-element";

describe("ListItem", () => {
  afterEach(fixtureCleanup);
  test("should set tabindex attribute", async () => {
    const element = await fixture<ListItem>(`<md-list-item>Neptunium</md-list-item>`);
    expect(element.getAttribute("tabindex")).toEqual("-1");
  });
  test("should add correct aria attribute", async () => {
    const element = await fixture<ListItem>(`<md-list-item disabled>Neptunium</md-list-item>`);
    expect(element.disabled).toBeTruthy();
    expect(element.getAttribute("aria-disabled")).toEqual("true");
    expect(element.getAttribute("role")).toEqual("listitem");
  });

  test("should change tabindex when disabled attribute is set", async () => {
    const element = await fixture<ListItem>(`<md-list-item disabled>Neptunium</md-list-item>`);

    expect(element.tabIndex).toEqual(-1);
    expect(element.getAttribute("tabindex")).toEqual("-1");

    element.disabled = false;
    await elementUpdated(element);

    expect(element.tabIndex).toEqual(0);
    expect(element.getAttribute("tabindex")).toEqual("0");
  });

  test("should handle checked attribute", async () => {
    const element = await fixture<ListItem>(`<md-list-item>Linting</md-list-item>`);
    element.selected = false;
    await elementUpdated(element);
    expect(element.getAttribute("aria-selected")).toEqual("false");
    element.selected = true;
    await elementUpdated(element);
    expect(element.selected).toBeTruthy();
    expect(element.getAttribute("aria-selected")).toEqual("true");
  });

  test("handle firstUpdated lifecycle hook", async () => {
    const tag = defineCE(
      class extends ListItem {
        protected firstUpdated(changedProperties: PropertyValues) {
          super.firstUpdated(changedProperties);
          this.dispatchEvent(new CustomEvent("first-updated"));
        }
      }
    );
    const element = fixtureSync(`<${tag}></${tag}>`);
    const event = await oneEvent(element, "first-updated");
    expect(event).toBeDefined();
  });
});
