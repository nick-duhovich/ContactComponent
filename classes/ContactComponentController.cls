public with sharing class ContactComponentController {
    
    static String checkString(String param) {
        if (String.isBlank(param)){
            return '%';
        }
        
        return '%' + param + '%';
    }
    
    @AuraEnabled
    public static List<Contact> filteringContacts(String filterValue) {
        System.debug(filterValue);
        String expression = checkString(filterValue);
        
        List<Contact> contacts = [SELECT Id, Name, Phone, MobilePhone, Email
                                  FROM Contact
                                  WHERE Name LIKE :expression
                                  OR Phone LIKE :expression
                                  OR Email LIKE :expression
                                  /*ORDER BY CreatedDate DESC*/
                                  ORDER BY LastModifiedDate DESC
                                  LIMIT 10];
        
        //SELECT ID, NAME, Phone, MobilePhone, Email FROM Contact ORDER BY LastModifiedDate DESC LIMIT 10
        //SELECT ID, NAME, Phone, MobilePhone, Email, LastCUUpdateDate FROM Contact ORDER BY CreatedDate DESC LIMIT 10
        
        return contacts;
	}
}