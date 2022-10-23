import contactsModel from "../models/contacts.js";

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'contacts/list', contacts: contactsCollection});
    })
}
export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: "Add Contact", page: "contacts/edit", contact: {} });
}
export function ProcessContactsAddPage(req, res, next){
 
    let newContact = contactsModel({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email
    });

    contactsModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list')
    })
}
export function DisplayContactsEditPage(req, res, next){

    let id = req.params.id ;

    contactsModel.findById(id, (err, contact) =>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Edit Contact', page: 'contacts/edit', contact: contact });
    });
}

export function ProcessContactsEditPage(req, res, next){

    let newContact = contactsModel({
        _id:req.body.id,
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email
    });

    contactsModel.updateOne({_id:req.params.id} ,newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list')
    })

}
export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id:id}, (err) =>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}