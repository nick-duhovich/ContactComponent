public with sharing class ContactComponentController {
    
    static String checkString(String param) {
        if (String.isBlank(param)){
            return '%';
        }
        return '%' + param + '%';
    }
    
    @AuraEnabled
    public static List<Contact> getContacts(String filterValue, Integer maxRecordsLimit) {
        String expression = checkString(filterValue);
        Integer limitRecords = maxRecordsLimit+1;
        System.debug(limitRecords);
        List<Contact> contacts = [SELECT Id, Name, Phone, MobilePhone, Email
                                  FROM Contact
                                  WHERE Name LIKE :expression
                                  OR Phone LIKE :expression
                                  OR Email LIKE :expression
                                  ORDER BY LastModifiedDate DESC
                                  LIMIT :maxRecordsLimit];
        return contacts;
	}
}