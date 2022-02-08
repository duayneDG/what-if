const prompt = require('prompt-sync')();

    let groupSize = Number(prompt("Hello, What size is your group? "));

    let groupsOF_5_calc = groupSize % 5;
    // console.log("groups of five: " + groupsOF_5_calc)
    let groupsOF_5 = (groupSize - groupsOF_5_calc) / 5;
    console.log(`Total tables of 5: ${groupsOF_5}`);


    let groupsOF_3_calc = (groupSize - 5 * groupsOF_5) % 3; 
    // console.log("groups 3 calc: " + groupsOF_3_calc)
    let groupsOF_3 = (groupSize - (5 * groupsOF_5 + groupsOF_3_calc)) /3; 
    if (groupsOF_3 < 1){
        groupsOF_3 = 0; 
    }
    console.log(`Total tables of 3: ${groupsOF_3}`)


    let groupsOF_2_calc = (groupSize - (5 * groupsOF_5 + 3 * groupsOF_3)) % 2 
    // console.log(groupsOF_2_calc)
    let groupsOF_2 = (groupSize - (5 * groupsOF_5 + 3 * groupsOF_3 + 2 * groupsOF_2_calc)) / 2; 
    if (groupsOF_2 < 1) {
        groupsOF_2 = 0; 
    }
    console.log(`Total tables of 2 ${groupsOF_2}`)







