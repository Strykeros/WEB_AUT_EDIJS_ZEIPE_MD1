import { TargetPage } from './TargetPage';

export class Grid extends TargetPage {

    static gridButton() {
        return cy.get('.nav-item');
    }

    static gridElement() {
        return cy.get('.list-group-item');
    }

}