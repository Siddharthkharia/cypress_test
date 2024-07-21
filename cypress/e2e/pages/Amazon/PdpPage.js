export class PdpPage{
    Weblocators ={
        ADD_TO_CART:'input[aria-labelledby="submit.add-to-cart-announce"][class="a-button-input"]',
        BUY_NOW:'input[aria-labelledby="submit.buy-now-announce"]'
    }

    click_Add_To_Cart(){
        cy.get(this.Weblocators.ADD_TO_CART).click()
    }

}