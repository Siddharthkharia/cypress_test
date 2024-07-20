import { amazonHomepage } from "../pages/Amazon/AmazonHomepage"
import testData from "../../fixtures/amazontestData.json"
const homepageObj = new amazonHomepage()

describe('Amazon test',()=>{



    it('Amazon test for launching url and searching the product',()=>{
        homepageObj.openAmazon()
        homepageObj.searchProduct(testData.productName)
    })

})