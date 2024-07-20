export class amazonHomepage{

    weblocator_xpath={
        searchBox:"//input[@id='twotabsearchtextbox']",
        submitBtn:"//input[@id='nav-search-submit-button']",
        checkbox:"//span[text()='Get It Today'][1]/preceeding::div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']following:://input[@type='checkbox']",
        FourStarUp:"//section[aria-label='4 Stars & Up']/following::/span[text()='& Up']",
        ObjctLocator:"//div[@data-index='{}']/following::a[1]",
        addToCartBtn:"//input[@id='add-to-cart-button']"
    }

    weblocator={
        searchBox:"#twotabsearchtextbox",
        submitBtn:"#nav-search-submit-button",
        ObjctLocator:"//div[@data-index='{}']/following::a[1]",
        addToCartBtn:"//input[@id='add-to-cart-button']"
    }

    openAmazon(){
        cy.visit('https://www.amazon.in')
    }

    searchProduct(productName){
        cy.get(this.weblocator.searchBox).type(productName)
        cy.get(this.weblocator.submitBtn).click()
    }

}