namespace database.db;
using { database.commons as commons } from './commons';
using { cuid, temporal, managed } from '@sap/cds/common';


context master {
    // entity zrequest : cuid,managed {
    //     REQUESTNUM : String(10);
    //     SITE : String(5);
    // }
    entity ZMATERIAL {
        key MATERIAL : String(10);
        MATERIALDESC: String(40);
        PRICE : Decimal(10, 2);
        CURRENCY: String(3);
    }
}