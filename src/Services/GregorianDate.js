class GregorianDate {
  getDayOfWeek(year, month, day) {
    let data = new Date(year, month, day);
    return data.getDay();
  }
  getCurrentDate() {
    let current = new Date();
    return {
      year: current.getFullYear(),
      month: current.getMonth(),
      day: current.getDate()
    };
  }
}

export default GregorianDate;
