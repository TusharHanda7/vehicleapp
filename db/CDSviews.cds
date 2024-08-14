namespace views.cds;

using { database.db.master as db } from './database';

context CDSviews {

    // define view![Vehicle] as
    //     select from db.zvi_vehicle {
    //         key ID as ![ID],
    //         platecode as ![PlateCode],
    //         platenum as ![PlateNum],
    //         mobilenum as ![MobileNum],
    //         name as ![CustomerName],
    //     };
    // define view![Requests] as
    //     select from db.zrequest {
    //         key REQUESTNUM as ![Request],
    //         SITE as ![Site]
    //     };
    define view![Material] as 
    select from db.ZMATERIAL{
        key MATERIAL,
        MATERIALDESC,
        PRICE,
        CURRENCY
    }

}

