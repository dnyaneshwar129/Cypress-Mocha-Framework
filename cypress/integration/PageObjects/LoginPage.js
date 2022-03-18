class LoginPage
{
    OpenLoginPage()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')


    }


    EnterEmailaddress(emailvalue)
    {
        const emailfield = cy.get('input[name="Email"]')
        emailfield.clear().type(emailvalue) 
        return this
    }

    EnterPassword(paswordlvalue)
    {
        const emailfield = cy.get('input[name="Password"]')
        emailfield.clear().type(paswordlvalue) 
        return this
    }


    ClickSubmit()
    {
       const submitbtn = cy.get('.login-button')
       submitbtn.click()
        
    }


}
export default LoginPage  // for accessing this class in test cases