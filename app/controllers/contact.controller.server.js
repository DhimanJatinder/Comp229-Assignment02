import contactsModel from "../models/contacts.js";

export function DisplayContactList(req, res, next){
    contactsModel.find(function(err, contactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'contacts/list', contacts: contactsCollection});
    })
}