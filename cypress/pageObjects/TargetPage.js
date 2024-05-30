export class TargetPage {
    static visit() {
        return cy.visit(this.url);
    }
}