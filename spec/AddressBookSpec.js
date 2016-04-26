//describe hierin groeperen we de tests
//in de functie gaan we de tests groeperen
describe('Address Book', function () {

      
    var addressBook;
    var thisContact;
    
    beforeAll(function(){
       console.log("beforeAll voor dit Describe block"); 
    });
    
    beforeEach(function(){   
         addressBook = new AddressBook();
         thisContact = new Contact();
    });
    
    
    it('should be able to add a contact', function () {
        //wat er moet gebeuren voor we de test kunnen uitvoeren
        addressBook.addContact(thisContact);
        //what is a good way to know if the contact was added to the adressBook ?
        //since we add the contact to an enmpty adressBook, we can get it by requesting the first item
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    
    it('should be able to delete a contact', function(){    
        //wat er moet gebeuren voor we de test kunnen uitvoeren
        addressBook.addContact(thisContact);
        //deletes latest contact, since there's only one
        //this will be thisContact
        addressBook.popContact();
        //what is a good way to know if the contact was deleted from the adressBook ?
        //since we add the contact to an empty adressBook, we can get it by requesting the first item
        //however, since we delete immediately afterwards, we expect the result not to be defined
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
    
    afterEach(function(){
       console.log("afterEach wordt uitgevoerd 1 keer per It Block"); 
    });
    
    afterAll(function(){
        console.log('afterAll wordt uitgevoerd 1 keer per Describe Block');
    });

});