export class SearchPage{
    
    weblocator={
        Delivery_day:{
            GET_IT_TOMORROW:"li[id='p_90/6741118031']",
            GET_IT_IN_2_DAYS:"li[id='p_90/20912642031']"
        },
        PRODUCT_LINK:"a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']:first-of-type"
    }

    openNthProductFromList(n){
        cy.get(this.weblocator.PRODUCT_LINK).eq(n).click()
    }
}