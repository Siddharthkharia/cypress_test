class PDP_page{
    Weblocators ={
        ADD_TO_CART:'input[aria-labelledby="submit.add-to-cart-announce"]',
        BUY_NOW:'aria-labelledby="submit.buy-now-announce"'
    }

    click_Add_To_Cart(){
        cy.get(this.Weblocators.ADD_TO_CART).click()
    }

}