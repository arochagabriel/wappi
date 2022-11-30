import { profilePage } from "./pages/profilePage.cy";
import { loginPage } from "./pages/loginPage.cy";
import { homePage } from "./pages/homePage.cy";
import { faker } from '@faker-js/faker';

var name = faker.name.firstName();
var lastname = faker.name.middleName();
var userName = name + lastname;
var passWord = faker.internet.password(8);

const login = new loginPage();
const home = new homePage ();
const profile = new profilePage();


describe('Testing wappi site', () => {
    it('Update the user profile info', () => {
        login.landing();
        login.setUserCredentials(userName,passWord);
        home.clkProfile();
        profile.uploadUserImage();
        profile.setFullUserInfo(name,lastname);
    });

    it ('Place an order with one item without a coupon',() =>{
        login.landing();
        login.setUserCredentials(userName,passWord);
        home.clkFirstItem();
        home.clkConfirmASingleOrder();
        home.clkConfirmMyOrders();
    })

    it ('Place an order with two items with a coupon',() =>{
        login.landing();
        login.setUserCredentials(userName,passWord);
        home.clkObtainAndApplyCoupon();
        home.clkConfirmMyOrders();
    })

});