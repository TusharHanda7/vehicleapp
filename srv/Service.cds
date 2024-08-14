using { database.db } from '../db/database';

service viservice @(path:'viservice'){
    entity Material as projection on db.master.ZMATERIAL;
    // entity RequestSet as projection on db.master.zrequest;
    // function getMaterial() returns String;
}