const { Grid } = require("../pageObjects/Grid");

describe('Selectable Item Test on DemoQA', () => {


    it('selects the correct grid items and validates the selection', () => {

        // Open https://demoqa.com/selectable
        cy.visit('https://demoqa.com/selectable');

        // Click “Grid”
        Grid.gridButton().contains('Grid').click();

        // Click - “Two”, “Four”, “Six”, “Eight”
        Grid.gridElement().contains('Two').click();
        Grid.gridElement().contains('Four').click();
        Grid.gridElement().contains('Six').click();
        Grid.gridElement().contains('Eight').click();

        // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
        Grid.gridElement().contains('Two').should('have.class', 'active');
        Grid.gridElement().contains('Four').should('have.class', 'active');
        Grid.gridElement().contains('Six').should('have.class', 'active');
        Grid.gridElement().contains('Eight').should('have.class', 'active');

        // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
        Grid.gridElement().contains('One').should('not.have.class', 'active');
        Grid.gridElement().contains('Three').should('not.have.class', 'active');
        Grid.gridElement().contains('Five').should('not.have.class', 'active');
        Grid.gridElement().contains('Seven').should('not.have.class', 'active');
        Grid.gridElement().contains('Nine').should('not.have.class', 'active');
    })
});