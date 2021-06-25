class DateFormated {
  static exec = (date: Date) => {
    return Intl.DateTimeFormat("es-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };
}

export default DateFormated;
