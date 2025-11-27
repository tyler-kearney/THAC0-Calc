export function determineAbilityMod(abilityScore) {
    if (abilityScore < 0) { // Checking to ensure ability score is a valid score
        console.error("Ability score cannot be negative");
        return 0; // Default safe return
    }

    let abilityMod = 0;

    if (abilityScore === 0) {
        abilityMod = -5;
    } else if (abilityScore === 1) {
        abilityMod = -4;
    } else if (abilityScore <= 3) {
        abilityMod = -3;
    } else if (abilityScore <= 5) {
        abilityMod = -2;
    } else if (abilityScore <= 8) {
        abilityMod = -1;
    } else if (abilityScore <= 12) {
        abilityMod = 0;
    } else if (abilityScore <= 15) {
        abilityMod = 1;
    } else if (abilityScore <= 17) {
        abilityMod = 2;
    } else if (abilityScore === 18) {
        abilityMod = 3;
    } else if (abilityScore <= 20) {
        abilityMod = 4;
    } else if (abilityScore <= 23) {
        abilityMod = 5;
    } else if (abilityScore <= 27) {
        abilityMod = 6;
    } else if (abilityScore <= 32) {
        abilityMod = 7;
    } else if (abilityScore <= 38) {
        abilityMod = 8;
    } else if (abilityScore <= 45) {
        abilityMod = 9;
    } else if (abilityScore <= 53) {
        abilityMod = 10;
    } else if (abilityScore <= 62) {
        abilityMod = 11;
    } else if (abilityScore <= 70) {
        abilityMod = 12;
    } else if (abilityScore <= 77) {
        abilityMod = 13;
    } else if (abilityScore <= 83) {
        abilityMod = 14;
    } else if (abilityScore <= 88) {
        abilityMod = 15;
    } else if (abilityScore <= 93) {
        abilityMod = 16;
    } else if (abilityScore <= 96) {
        abilityMod = 17;
    } else if (abilityScore <= 98) {
        abilityMod = 18;
    } else if (abilityScore === 99) {
        abilityMod = 19;
    } else if (abilityScore === 100) {
        abilityMod = 20;
    } else {
        // Replacement for MessageBox.Show: Log error and return a safe value
        console.error(`Selected ability score (${abilityScore}) is outside of the expected chart range (0-100).`);
        abilityMod = 0;
    }
            
    return abilityMod;
}

// Function to determine THAC0 intervals
export function determineThac0Interval(className) {
    const intervals = {
        // Group 1 (3 level interval)
        "Fighter": 3,
        "Dwarf": 3,
        "Elf": 3,
        "Halfling": 3,

        // Group 2 (4 level interval)
        "Cleric": 4,
        
        // Group 3 (5 level interval)
        "Magic-User": 5,
        "Thief": 5
    };

    return intervals[className] || 0; // Returns 0 if className not found
}

// Function to determine starting THAC0 based on class
export function determineBaseThac0(className, level) {
    if (level < 1) {
        return 20; // Default THAC0 for invalid levels
    }

    let levelInterval = determineThac0Interval(className);

    if (levelInterval === 0) {
        console.error(`Unrecognized class name: ${className}. Defaulting to 5 level interval.`);
        levelInterval = 5;
    }

    const reduction = Math.floor((level - 1) / levelInterval);

    const baseThac0 = 20 - reduction;

    return baseThac0;
}