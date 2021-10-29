// Developing a system to file the tax in US statewise
// next button should be enabled only after all the mandatory entries are filled
// on click of X the modal popup should be closed and next time when we open the form should have been reset
// Onclick on reset button the form should be reset
// Only alphabet should be allowed in firstname and lastname - ie on entry the any othe character it should not be allowed to enter in the text box

// Only Decimal value uptp 2 digits forexample -  12.48 , 12, 12.4, 12.00 should be allowed in premium
//  So after enteing 2 digigts after decimal point it should not even allow me to enter anything else
//  Only number are allowed


// Based on the state that is selected in the dropdown
// The taxs needs to calculated using the preium and displayed below the dropdown


// {
//     "state": "California",
//     "code": "CA",
//     "taxes": [
//         {
//             "firetax": "2"
//         },
//         {
//             "statetax": "3"
//         },
//         {
//             "roadtax": "4"
//         },
//         {
//             "fillingCharges": "2"
//         }
//     ]
// },


// If i selected california as in state dropdown
// Then the total cost = 100 + ( 2% of 100) + ( 3 % of 100) + (4% of 100) + (2% of 100)
                    //    = $111