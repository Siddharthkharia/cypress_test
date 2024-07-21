export class PdpPage{
    Weblocators ={
        ADD_TO_CART:'input[aria-labelledby="submit.add-to-cart-announce"][class="a-button-input"]',
        BUY_NOW:'input[aria-labelledby="submit.buy-now-announce"]',
        CloseBtnAddToCartDrawer:'#attach-close_sideSheet-link'
    }

    click_Add_To_Cart(){
        cy.get(this.Weblocators.ADD_TO_CART).click()
    }

    close_AddToCart_drawer(){
        cy.get(this.Weblocators.CloseBtnAddToCartDrawer).click()
    }

}