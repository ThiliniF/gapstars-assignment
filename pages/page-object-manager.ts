import { Page } from "@playwright/test";
import BasePage from "./base-page";
import { AddRemoveElementsPage } from "./add-remove-elements";
import { HomePage } from "./home-page";
import { CheckboxesPage } from "./checkboxes-page";
import { DragAndDropPage } from "./drag-and-drop-page";
import { WindowsPage } from "./windows-page";

export default class PageObjectManager extends BasePage {
  public addRemoveElementsPage: AddRemoveElementsPage;
  public homePage: HomePage;
  public checkboxesPage: CheckboxesPage;
  public dragAndDropPage: DragAndDropPage;
  public windowsPage: WindowsPage;

  constructor(page: Page) {
    super(page);
    this.addRemoveElementsPage = new AddRemoveElementsPage(page);
    this.homePage = new HomePage(page);
    this.checkboxesPage = new CheckboxesPage(page);
    this.dragAndDropPage = new DragAndDropPage(page);
    this.windowsPage = new WindowsPage(page);
  }
}
