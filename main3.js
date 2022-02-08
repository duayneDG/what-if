const prompt = require('prompt-sync')();

    let groupSize = Number(prompt("Hello, What size is your group? "));

    let groupsOF_5_calc = groupSize % 5;
    // console.log("groups of five: " + groupsOF_5_calc)
    let groupsOF_5 = (groupSize - groupsOF_5_calc) / 5;
    console.log(`Total tables of 5: ${groupsOF_5}`);

    // _________________________________________________________________________________

    let groupsOF_3_calc = (groupSize - 5 * groupsOF_5) % 3; 
    // console.log("groups 3 calc: " + groupsOF_3_calc)

    if (groupsOF_3_calc < 1){
        groupsOF_3_calc = 0; 
    }
    // console.log("groups of 3 calc 2 :" + groupsOF_3_calc)

    // _________________________________________________________________________________
    let groupsOF_3 = (groupSize - (5 * groupsOF_5 + groupsOF_3_calc)) / 3;
    // console.log("groups of 3 tables: " + groupsOF_3)
    if (groupsOF_3 < 1) {
        groupsOF_3 = 0; 
    }
    else {groupsOF_3 = Math.trunc(groupsOF_3);
    }

    //__________________________________________________________________________________

    let groupsOF_2_calc = (groupSize - (5 * groupsOF_5 + 3 * groupsOF_3)) % 2 
    // console.log(groupsOF_2_calc) 
    /* Prints the remainder which is used to subtract from the groupsize
    allowing for an correct count for the number of tables */

    // console.log("groups of two calc: "+ groupsOF_2_calc )
    //____________________________________________________________________________________

    let groupsOF_2 = (groupSize - (5 * groupsOF_5 + 3 * groupsOF_3 - groupsOF_2_calc)) / 2; 
    // console.log("000002 calc :"+ groupsOF_2); 
    if (groupsOF_2 < 1 && groupsOF_2 > 0) {
        groupsOF_2 += 1;
        // console.log("if")
    }
    
    console.log(`Total tables of 3: ${groupsOF_3}`)
    console.log(`Total tables of 2: ${groupsOF_2}`);






