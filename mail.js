var astro_sign;

let day = 0;
let month = 0;


while (day < 1 || day > 31 || isNaN(day)) {
    day = prompt("please enter in which day had you born ? please enter 1-31");
}

while (month < 1 || month > 31 || isNaN(month)) {
    month = prompt("please enter in which month had you born ? please enter 1-12");
}

switch (month) {
    case 2:
        if (day > 29) {
            alert("Your Astrological sign is undifined because February has maximum 29 days.... Hehe you can not me fool");
        }
        break;
    case 4:
        if (day == 31) {
            alert("Your Astrological sign is undifined because April has maximum 30 days.... Hehe you can not me fool");
        }
        break;
    case 6:
        if (day == 31) {
            alert("Your Astrological sign is undifined because April has maximum 30 days.... Hehe you can not me fool");
        }
        break;
    case 9:
        if (day == 31) {
            alert("Your Astrological sign is undifined because April has maximum 30 days.... Hehe you can not me fool");
        }
        break;
    case 11:
        if (day == 31) {
            alert("Your Astrological sign is undifined because November has maximum 30 days.... Hehe you can not me fool");
        }
        break;
    default:
        break;
}

if (month == 12) {
    if (day < 22) {
        astro_sign = 'Sagittarius';
    } else {
        astro_sign = 'capricorn';
    }
} else if (month == 1) {
    if (day < 20) {
        astro_sign = 'capricorn';
    } else {
        astro_sign = 'aquarius';
    }
} else if (month == 2) {
    if (day < 19) {
        astro_sign = 'aquarius';
    } else {
        astro_sign = 'pisces';
    }
} else if (month == 3) {
    if (day < 21) {
        astro_sign = 'pisces';
    } else {
        astro_sign = 'aries';
    }
} else if (month == 4) {
    if (day < 20) {
        astro_sign = 'aries';
    } else {
        astro_sign = 'taurus';
    }
} else if (month == 5) {
    if (day < 21) {
        astro_sign = 'taurus';
    } else {
        astro_sign = 'gemini';
    }
} else if (month == 6) {
    if (day < 21) {
        astro_sign = 'gemini';
    } else {
        astro_sign = 'cancer';
    }
} else if (month == 7) {
    if (day < 23) {
        astro_sign = 'cancer';
    } else {
        astro_sign = 'leo';
    }
} else if (month == 8) {
    if (day < 23) {
        astro_sign = 'leo';
    } else {
        astro_sign = 'virgo';
    }
} else if (month == 9) {
    if (day < 23) {
        astro_sign = 'virgo';
    } else {
        astro_sign = 'libra';
    }
} else if (month == 10) {
    if (day < 23) {
        astro_sign = 'libra';
    } else {
        astro_sign = 'scorpio';
    }
} else if (month == 11) {
    if (day < 22) {
        astro_sign = 'scorpio';
    } else {
        astro_sign = 'sagittarius';
    }
}
alert("Your Astrological sign is :" + astro_sign);