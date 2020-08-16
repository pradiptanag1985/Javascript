const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

//Gets all members
router.get('/', (req,res) => res.json(members));

//Get one member
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(!found) {
        res.status(400).json({msg : `No member with id : ${req.params.id}`});
    } else {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
});

//Create member
router.post('/', (req, res) => {
    let newMember = {
        id : uuid.v4(),
        name : req.body.name
    };

    if(!newMember.name) {
        res.status(400).json({msg : 'Please include name'});
    } else {
        members.push(newMember);
        res.json(members);
    }
});

//Update Member
router.put('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(!found) {
        res.status(400).json({msg : `No member with id : ${req.params.id}`});
    } else {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                res.json({msg : 'Memeber updated'});
            }
        });
    }
});

//delete member
router.delete('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(!found) {
        res.status(400).json({msg : `No member with id : ${req.params.id}`});
    } else {
        res.json({msg : 'Member deleted' , members : members.filter(member => member.id !== parseInt(req.params.id))});
    }
});

module.exports = router;

