public class showContactsForComponent {
    @auraEnabled
    public static list<Contact> getAllContacts() {
        List<Contact> contacts = [SELECT ID, NAME, Phone, MobilePhone, Email
                                  FROM Contact
                                  LIMIT 100];
        return contacts;
    }
}