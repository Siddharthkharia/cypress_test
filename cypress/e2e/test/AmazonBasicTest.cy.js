import { amazonHomepage } from "../pages/Amazon/AmazonHomepage"
import {SearchPage} from "../pages/Amazon/Searchpage"
import {PdpPage} from "../pages/Amazon/PdpPage"
import testData from "../../fixtures/amazontestData.json"

const homepageObj = new amazonHomepage();
const searchpageObj = new SearchPage()
const PdpPageObj = new PdpPage()

describe('Amazon test',()=>{

    it('Amazon test for launching url and searching the product',()=>{
        homepageObj.openAmazon()
        homepageObj.searchProduct(testData.productName)
        searchpageObj.openNthProductFromList(2) //opening the second product
        PdpPageObj.click_Add_To_Cart()
    })

})