function Holiday() {

      if (month == 10 && day == 24 && year == 2022) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 23 && year == 2023) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 28 && year == 2024) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 27 && year == 2025) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 26 && year == 2026) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 25 && year == 2027) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 23 && year == 2028) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 22 && year == 2029) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 28 && year == 2030) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 27 && year == 2031) {
        return " Happy Thanksgiving!";
      } else if (month == 10 && day == 25 && year == 2032) {
        return " Happy Thanksgiving!";
      } else if (month == 1 && day == 1 && year == 2022) {
        return "Happy Lunar New Year!";
      } else if (month == 0 && day == 22 && year == 2023) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 10 && year == 2024) {
        return "Happy Lunar New Year!";
      } else if (month == 0 && day == 29 && year == 2025) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 17 && year == 2026) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 7 && year == 2027) {
        return "Happy Lunar New Year!";
      } else if (month == 0 && day == 26 && year == 2028) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 13 && year == 2029) {
        return "Happy Lunar New Year!";
      } else if (month == 1 && day == 2 && year == 2030) {
        return "Happy Lunar New Year!";
      } else if (month == 3 && day == 17 && year == 2022) {
        return "Happy Easter!";
      } else if (month == 3 && day == 9 && year == 2023) {
        return "Happy Easter!";
      } else if (month == 2 && day == 31 && year == 2024) {
        return "Happy Easter!";
      } else if (month == 3 && day == 20 && year == 2025) {
        return "Happy Easter!";
      } else if (month == 3 && day == 5 && year == 2026) {
        return "Happy Easter!";
      } else if (month == 2 && day == 28 && year == 2027) {
        return "Happy Easter!";
      } else if (month == 3 && day == 16 && year == 2028) {
        return "Happy Easter!";
      } else if (month == 3 && day == 1 && year == 2029) {
        return "Happy Easter!";
      } else if (month == 3 && day == 21 && year == 2030) {
        return "Happy Easter!";
      } else if (month == 3 && day == 13 && year == 2031) {
        return "Happy Easter!";
      } else if (month == 2 && day == 28 && year == 2032) {
        return "Happy Easter!";
      } else if (month == 9 && day == 31) {
        return "Happy Halloween!";
      } else if (month == 11 && day == 25) {
        return "Merry Christmas!";
      } else if (month == 11 && day == 24) {
        return "Merry Christmas Eve!";
      } else if (month == 11 && day == 31) {
        return "Happy New Year's Eve!";
      } else if (month == 0 && day == 1) {
        return "Happy New Year!";
      } else if (month == 6 && day == 4) {
        return "Happy Fourth of July!";
      } else if (month == 4 && day == 4) {
        return "May the 4th be with you!";
      } else if (month == 2 && day == 17) {
        return "Happy St. Patrick's Day!";
      } else if (month == 4 && day == 5) {
        return "Happy Cinco de Mayo!";
      }
      
      else if ((year) == 2022 && month == 11 && (day > 18 && day < 23)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2023 && month == 11 && (day > 7 && day < 15)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2024 && month == 11 && (day > 26 && day < 30)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2025 && month == 11 && (day > 14 && day < 22)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2026 && month == 11 && (day > 4 && day < 12)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2027 && month == 11 && (day > 26 && day < 30)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2028 && month == 11 && (day > 12 && day < 20)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2029 && month == 11 && (day > 1 && day < 9)) {
        return "Happy Hanukkah!";
      } else if ((year) == 2030 && month == 11 && (day > 20 && day < 23)) {
        return "Happy Hanukkah!";
      } else {
        return "Today is " + dayNames[week] + " , " + monthNames[month] + " " + day + " " + year;
      }
    }
